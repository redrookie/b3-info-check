import express from "express";
import bodyParser from "body-parser";
import { dataMock } from "./mocks.js";
import handleRequest from "./modules/handleRequest.js";

const PORT = process.env.PORT || 3001;

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post("/api", async (req, res) => {
	let dataRequest = await handleRequest(req, res);
	res.json({ data: dataRequest, status: 200 });
});

app.listen(PORT, () => {
	console.log(`Alto e claro na porta ${PORT}`);
});
