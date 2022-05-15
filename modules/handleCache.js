import Ativo from "../ativo.js";
import Historico from "../historico.js";
import { Op } from "sequelize";

async function handleCache(name, dateMin, dateMax) {
	const ativo = await Ativo.findOne({
		where: {
			nome: name,
		},
	});
	if (!!ativo) {
		try {
			const history = await Historico.findAll({
				where: {
					idAtivo: ativo["id"],
					Date: {
						[Op.between]: [dateMin, dateMax],
					},
				},
				order: [["Date", "ASC"]],
			});

			if (
				history[0]["Date"] !== dateMin.toISOString().split("T")[0] ||
				history[history.length - 1]["Date"] !==
					dateMax.toISOString().split("T")[0]
			) {
				//Caso a data minima não exista no cache, e possivel que o cache nao esteja preenchido ate aquele ponto
				//Caso a data maxima nao exista, e possivel que o cache esteja desatualizado
				return null;
			}

			const auxArr = {
				name: ativo["nome"],
				data: [],
			};
			auxArr.data = history.map((elem) => {
				return {
					Date: elem["Date"],
					Value: elem["Value"],
				};
			});
			return auxArr;
		} catch (e) {
			console.log("ERRO", e);
		}
	} else {
		Ativo.create({
			nome: name,
		});
		return null;
	}
}

export default handleCache;
