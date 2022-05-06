import express from "express";
import bodyParser from "body-parser";
import fetch from "node-fetch";
import findClosestValidDate from "./modules/findClosestValidDate.js";
import { dataMock } from "./mocks.js";
import handleData from "./modules/handleData.js";

const PORT = process.env.PORT || 3001;

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post("/api", (req, res) => {
	const nomesArray = req.body.nomes.split(" ");
	const minDate = new Date(req.body.minDate);
	const maxDate = new Date(req.body.maxDate);
	const size = req.body.size;
	const data = dataMock["Time Series (Daily)"];
	const minValidDate = new Date(findClosestValidDate(minDate, maxDate, data));
	const processedData = handleData(minValidDate, maxDate, data);
	res.json({ message: processedData, status: 200 });
	// fetch(
	// 	`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${nomesArray[0]}.SA&outputsize=${size}&apikey=${process.env.REACT_APP_API_KEY}`
	// )
	// 	.then((res) => res.json())
	// 	.then((data) => {
	// 		if (!!data["Error Message"])
	// 			res.json({ message: data, status: 500 });
	// 		else {
	// 			const minValidDate = findClosestValidDate(
	// 				minDate,
	// 				maxDate,
	// 				data
	// 			);
	// 			if (!!minValidDate) {
	// 				res.json({
	// 					message:
	// 						"Por favor, verifique se o período possui dias úteis.",
	// 					status: 500,
	// 				});
	// 			}
	// 			res.json({ message: data, status: 200 });
	// 		}
	// 	})
	// 	.catch((error) => res.json({ message: error, status: 500 }));
});

app.listen(PORT, () => {
	console.log(`Alto e claro na porta ${PORT}`);
});
