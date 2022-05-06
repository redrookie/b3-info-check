import handleData from "../modules/handleData.js";
import fetch from "node-fetch";
import findClosestValidDate from "../modules/findClosestValidDate.js";

async function handleRequest(req, res) {
	const nomesArray = req.body.nomes.split(" ");
	const minDate = new Date(req.body.minDate);
	const maxDate = new Date(req.body.maxDate);
	const size = req.body.size;
	let promises = [];
	nomesArray.map((name) => {
		promises.push(
			fetch(
				`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${name}.SA&outputsize=${size}&apikey=${process.env.REACT_APP_API_KEY}`
			)
				.then((res) => res.json())
				.then((data) => {
					if (!!data["Error Message"]) {
						return null;
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
						return { name: name, data: processedData };
					}
				})
		);
	});
	Promise.all(promises).then((result) => {
		console.log("result", result);
		console.log("result0", result[0]);
		return result;
	});
}

export default handleRequest;
