import "../App.scss";
import { React, useState, useEffect } from "react";
import { dataMock } from "../mocks.js";
import InputTextBox from "../Components/InputTextBox/InputTextBox";
import AssetsForm from "../Components/AssetsForm";
import InputDate from "../Components/InputDate";
import InputButton from "../Components/Button/InputButton";

function handleSubmit(e) {
	e.preventDefault();
	const names = document.querySelectorAll("#assets_name")[0].value;
	const minDate = document.querySelectorAll("#date-min")[0].value;
	const maxDate = document.querySelectorAll("#date-max")[0].value;
	const difference =
		(new Date(String(maxDate)).getTime() -
			new Date(String(minDate)).getTime()) /
		(1000 * 3600 * 24);
	let outputSizeParam = "compact";

	if (names === "") {
		document.querySelectorAll(".after-message")[0].innerText =
			"O campo de nomes não pode ser vazio!";
		return;
	}
	if (difference > 100) outputSizeParam = "full";
	if (difference < 0 || isNaN(difference)) {
		document.querySelectorAll(".after-message")[0].innerText =
			"Erro, datas inválidas!";
	} else {
		fetch(`/api`)
			.then((res) => res.json())
			.then((res) => {
				console.log("res from backend", res);
				document.querySelectorAll(".after-message")[0].innerText =
					"Enviado";
				document
					.querySelectorAll(".after-message")[0]
					.classList.add("submit-done");
			});
	}
}

function App() {
	const [value, setValue] = useState(null);

	// useEffect(() => {
	// 	fetch(
	// 		`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&outputsize=${outputSizeParam}&apikey=0ES12FDPP6C69U6M`
	// 	)
	// 		.then((res) => res.json())
	// 		.then((data) => {
	// 			setValue("data");
	// 			console.log("value", data);
	// 		})
	// 		.catch((error) => console.log("Erro: ", error));
	// }, []);
	const data = dataMock || value;
	console.log("data", data);

	return (
		<div className="App">
			<header className="App-header">
				<AssetsForm onSubmit={(e) => handleSubmit(e)}>
					<InputTextBox value="Digite aqui os ativos"></InputTextBox>
					<InputDate
						id="date-min"
						value="Digite a data mínima"
					></InputDate>
					<InputDate
						id="date-max"
						value="Digite a data máxima"
					></InputDate>
					<InputButton>Send</InputButton>
				</AssetsForm>
				<p className="after-message">
					A API utilizada é gratuita, por isso ela possui um limite de
					5 chamadas por minuto, ou 500 por dia. ;)
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
		</div>
	);
}

export default App;
