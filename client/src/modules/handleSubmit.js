async function handleSubmit(e) {
	e.preventDefault();

	const names = document.querySelectorAll("#assets_name")[0].value;
	const minDate = document.querySelectorAll("#date-min")[0].value;
	const maxDate = document.querySelectorAll("#date-max")[0].value;
	const difference =
		(new Date(String(maxDate)).getTime() -
			new Date(String(minDate)).getTime()) /
		(1000 * 3600 * 24);
	let outputSizeParam = "compact";
	let classlist = document.querySelectorAll(".error-tooltip__wrapper")[0]
		.classList;
	if (names.trim().split(" ").length > 5) {
		classlist.remove("wrong-date");
		classlist.add("full-list");
		classlist.remove("hide");
		return null;
	}
	if (difference > 100) outputSizeParam = "full";
	else if (difference < 0 || isNaN(difference)) {
		classlist.remove("full-list");
		classlist.add("wrong-date");
		classlist.remove("hide");
		return null;
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
				classlist.add("hide");
				document.querySelectorAll(".after-message")[0].innerText =
					"Enviado"; //Voltar depois
				return res;
			});
		return response;
	}
}

export default handleSubmit;
