import express from "express";
import bodyParser from "body-parser";
import handleRequest from "./modules/handleRequest.js";
import sequelize from "./db.js";
import Ativo from "./ativo.js";
import Historico from "./historico.js";

const PORT = process.env.PORT || 3001;

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post("/api", async (req, res) => {
	try {
		let dataRequest = await handleRequest(req, res);
		res.json({ data: dataRequest, status: 200 });
	} catch (err) {
		res.json({ message: "Erro na requisição", status: 500 });
	}
});

app.listen(PORT, () => {
	console.log(`Alto e claro na porta ${PORT}`);
});

(async () => {
	try {
		Ativo.hasMany(Historico, {
			foreignKey: "idAtivo",
		});
		Historico.belongsTo(Ativo, {
			constraint: true,
			foreignKey: "idAtivo",
		});
		const syncronize = await sequelize.sync();
	} catch (error) {
		console.log(error);
	}
})();
