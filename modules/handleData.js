//Retorna o subconjunto dos valores no período especificado
function handleData(minValidDate, maxDate, data) {
	let auxDate = minValidDate;
	let resultArray = [];
	let difference = (maxDate - minValidDate) / (1000 * 24 * 3600);
	let auxDateString = auxDate.toISOString().split("T")[0];
	while (difference >= 0) {
		if (!!data[auxDateString]) {
			resultArray.push({
				Date: auxDateString,
				Value: data[auxDateString]["4. close"],
			});
		}
		auxDate.setDate(auxDate.getDate() + 1);
		auxDateString = auxDate.toISOString().split("T")[0];
		difference = (maxDate - auxDate) / (1000 * 24 * 3600);
	}
	return resultArray;
}

export default handleData;
