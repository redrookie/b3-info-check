function findClosestValidDate(minDate, maxDate, data) {
	if (!!data && data.hasOwnProperty(minDate)) {
		return minDate;
	}
	let currDate = new Date(minDate);
	let auxDate = new Date(currDate.getTime());
	let maxDateLimit = new Date(maxDate);
	currDate.setDate(auxDate.getDate() + 1);
	let difference =
		(maxDateLimit.getTime() - currDate.getTime()) / (1000 * 3600 * 24);
	while (
		!data.hasOwnProperty(currDate.toISOString().split("T")[0]) &&
		difference > 0
	) {
		auxDate = new Date(currDate.getTime());
		currDate.setDate(auxDate.getDate() + 1);
		difference =
			(maxDateLimit.getTime() - currDate.getTime()) / (1000 * 3600 * 24);
	}
	return currDate;
}

export default findClosestValidDate;
