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
			return history;
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
