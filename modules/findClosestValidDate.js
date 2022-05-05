function findClosestValidDate(minDate, data) {
	console.log("debug");
	if (!!data && data.hasOwnProperty(minDate)) {
		return minDate;
	}
	let currDate = new Date(minDate);
	let auxDate = new Date(currDate.getTime());
	currDate.setDate(auxDate.getDate() + 1);
	let x = 0;
	while (!data.hasOwnProperty(currDate.toISOString().split("T")[0])) {
		auxDate = new Date(currDate.getTime());
		currDate.setDate(auxDate.getDate() + 1);
		x = x + 1;
	}
	console.log("rodei", x);
	return currDate;
}

export default findClosestValidDate;
