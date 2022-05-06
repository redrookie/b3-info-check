function findClosestValidDate(minDate, maxDate, data) {
	if (!!data && data.hasOwnProperty(minDate.toISOString().split("T")[0])) {
		return minDate;
	}
	let currDate = minDate;
	currDate.setDate(currDate.getDate() + 1);
	let difference = (maxDate - currDate) / (1000 * 3600 * 24);
	while (!data.hasOwnProperty(currDate.toISOString().split("T")[0])) {
		if (difference <= 0) return null;
		currDate.setDate(currDate.getDate() + 1);
		difference = (maxDate - currDate) / (1000 * 3600 * 24);
	}
	return currDate.toISOString().split("T")[0];
}

export default findClosestValidDate;
