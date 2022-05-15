import handleData from "../modules/handleData.js";
import fetch from "node-fetch";
import findClosestValidDate from "../modules/findClosestValidDate.js";
import handleCache from "./handleCache.js";
import Ativo from "../ativo.js";
import Historico from "../historico.js";

let cacheResult = [];

function buildQueryUrl(name, size) {
	return `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${name}.SA&outputsize=${size}&apikey=${process.env.REACT_APP_API_KEY}`;
}

async function filterCache(elem, minDate, maxDate) {
	let cache = await handleCache(elem, minDate, maxDate);
	if (!!cache) {
		cacheResult.push(cache);
		console.log("Achei cache", cacheResult);
		return false;
	} else return true;
}

async function handleRequest(req, res) {
	const nomesArray = req.body.nomes.split(" ");
	const minDate = new Date(req.body.minDate);
	const maxDate = new Date(req.body.maxDate);
	const size = req.body.size;
	let promises = nomesArray
		.filter(async (elem) => await filterCache(elem, minDate, maxDate))
		.map(async (name) => {
			return fetch(buildQueryUrl(name, size))
				.then((res) => res.json())
				.then(async (data) => {
					if (!!data["Error Message"]) {
						return {
							message:
								"Chamada inválida à API. Verifique os nomes digitados.",
							status: 500,
						};
					} else {
						const dataDaily = data["Time Series (Daily)"];
						const minValidDate = findClosestValidDate(
							minDate,
							maxDate,
							dataDaily
						);
						if (minValidDate === null) {
							return {
								message: "Não há data mínima no período",
								status: 500,
							};
						}
						const processedData = handleData(
							new Date(minValidDate),
							maxDate,
							dataDaily
						);
						try {
							let id = await Ativo.findOne({
								where: {
									nome: name,
								},
							});
							let databaseData = processedData.map((elem) => {
								return {
									idAtivo: id["id"],
									Date: elem["Date"],
									Value: elem["Value"],
								};
							});
							await Historico.bulkCreate(databaseData);
						} catch (e) {
							console.log("ERRO", e);
						} finally {
							return { name: name, data: processedData };
						}
					}
				});
		});

	let response = Promise.all(promises).then((result) => {
		// cacheResult.forEach((elem) => {
		// 	result.push(elem);
		// });
		// cacheResult = [];
		return result;
	});
	return response;
}

export default handleRequest;
