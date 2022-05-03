import express from "express";
import bodyParser from "body-parser";
import fetch from "node-fetch";

const PORT = process.env.PORT || 3001;

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post("/api", (req, res) => {
	const nomesArray = req.body.nomes.split(" ");
	const minDate = req.body.minDate;
	const maxDate = req.body.maxDate;
	const size = req.body.size;
	// fetch(
	// 	`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${nomesArray[0]}.SA&outputsize=${size}&apikey=${process.env.REACT_APP_API_KEY}`
	// )
	// 	.then((res) => res.json())
	// 	.then((data) => {
	// 		if (data["Error Message"]) res.json({ message: data, status: 500 });
	// 		else res.json({ message: data, status: 200 });
	// 	})
	// 	.catch((error) => res.json({ message: error, status: 500 }));
	res.json({ message: "Backend ok!", status: 200 });
});

app.listen(PORT, () => {
	console.log(`Alto e claro na porta ${PORT}`);
});
