async function handleSubmit(e) {
	e.preventDefault();

	const names = document
		.querySelectorAll("#assets_name")[0]
		.value.toUpperCase();
	const minDate = new Date(
		String(document.querySelectorAll("#date-min")[0].value)
	);
	const maxDate = new Date(
		String(document.querySelectorAll("#date-max")[0].value)
	);
	const differenceFromPresent = Math.floor(
		(new Date().setHours(21) - minDate) / (1000 * 3600 * 24)
	);
	const differenceBetweenMaxAndMin = maxDate - minDate;
	const outputSizeParam = differenceFromPresent > 100 ? "full" : "compact";
	let classlist = document.querySelectorAll(".feedback-tooltip__wrapper")[0];

	if (names.trim().split(" ").length > 5) {
		classlist.className = "feedback-tooltip__wrapper full-list";
		return { message: "Digite no máximo 5 ativos", status: 500 };
	} else if (differenceBetweenMaxAndMin < 0 || isNaN(differenceFromPresent)) {
		classlist.className = "feedback-tooltip__wrapper wrong-date";
		return {
			message:
				"As datas digitadas foram inválidas. Selecione uma data final que seja maior que a data inicial!",
			status: 500,
		};
	} else {
		let response = await fetch(`/api`, {
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				nomes: names,
				minDate: minDate,
				maxDate: maxDate,
				size: outputSizeParam,
			}),
			method: "POST",
		})
			.then((res) => res.json())
			.then((res) => {
				classlist.className = "feedback-tooltip__wrapper success";
				return res;
			});
		return response;
	}
}

export default handleSubmit;
