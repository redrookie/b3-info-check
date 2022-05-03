import "../App.scss";
import { React, useState } from "react";
import { dataMock } from "../mocks.js";
import InputTextBox from "../Components/InputTextBox/InputTextBox";
import AssetsForm from "../Components/AssetsForm";
import InputDate from "../Components/InputDate";
import InputButton from "../Components/InputButton/InputButton";
import handleSubmit from "../modules/handleSubmit";

function App() {
	const [value, setValue] = useState(null);
	const data = dataMock || value;
	console.log("value", value);

	return (
		<div className="App">
			<div className="div__form">
				<AssetsForm
					onSubmit={(e) => {
						handleSubmit(e).then(function (result) {
							//setValue(result);
							console.log("result", result);
						});
					}}
				>
					<InputTextBox value="Digite aqui o nome dos ativos"></InputTextBox>
					<InputDate
						id="date-min"
						value="Digite a data inicial do período"
					></InputDate>
					<InputDate
						id="date-max"
						value="Digite a data final do período"
					></InputDate>
					<InputButton>Send</InputButton>
				</AssetsForm>
				<p className="after-message">
					A API utilizada é gratuita, por isso ela possui um limite de
					5 chamadas por minuto, ou 500 por dia. ;)
				</p>
			</div>
			<div className="div__graph">
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</div>
		</div>
	);
}

export default App;
