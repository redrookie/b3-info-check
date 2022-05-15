import handleData from "../modules/handleData.js";
import fetch from "node-fetch";
import findClosestValidDate from "../modules/findClosestValidDate.js";
import handleCache from "./handleCache.js";
import Ativo from "../ativo.js";
import Historico from "../historico.js";

async function handleRequest(req, res) {
	const nomesArray = req.body.nomes.split(" ");
	const minDate = new Date(req.body.minDate);
	const maxDate = new Date(req.body.maxDate);
	const size = req.body.size;
	let cache;
	let cacheResult = [];
	let promises = nomesArray
		.filter(async (elem) => {
			cache = await handleCache(elem, minDate, maxDate);
			if (!!cache) {
				cacheResult.push(cache);
				return false;
			} else return true;
		})
		.map(async (name) => {
			return fetch(
				`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${name}.SA&outputsize=${size}&apikey=${process.env.REACT_APP_API_KEY}`
			)
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
								message: "Não há data mínima no périodo",
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
							Historico.bulkCreate(databaseData);
						} catch (e) {
							console.log("ERRO", e);
						}
						return { name: name, data: processedData };
					}
				});
		});

	let response = Promise.all(promises).then((result) => {
		console.log("cacheResult", cacheResult);
		return result;
	});
	return response;
}

export default handleRequest;
