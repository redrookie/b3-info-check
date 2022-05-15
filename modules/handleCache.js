import Ativo from "../ativo.js";
import Historico from "../historico.js";

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
				},
			});
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
