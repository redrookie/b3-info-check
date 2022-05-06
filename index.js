import express from "express";
import bodyParser from "body-parser";
import { dataMock } from "./mocks.js";
import handleRequest from "./modules/handleRequest.js";

const PORT = process.env.PORT || 3001;

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post("/api", (req, res) => {
	handleRequest(req, res).then((response) => {
		console.log("response", response);
		res.json({ data: response });
	});
});

app.listen(PORT, () => {
	console.log(`Alto e claro na porta ${PORT}`);
});
