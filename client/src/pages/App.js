import "../App.scss";
import { React, useState } from "react";
import { dataMock } from "../mocks.js";
import InputTextBox from "../Components/InputTextBox/InputTextBox";
import AssetsForm from "../Components/AssetsForm";
import InputDate from "../Components/InputDate";
import InputButton from "../Components/InputButton/InputButton";
import handleSubmit from "../modules/handleSubmit";
import Graph from "../Components/Graph/Graph";

function App() {
	const [value, setValue] = useState(null);
	const data = dataMock || value;
	console.log("Value em app.js", value);

	return (
		<div className="App">
			<div className="div__form">
				<AssetsForm
					onSubmit={(e) => {
						handleSubmit(e).then(function (result) {
							if (result && result.status === 200) {
								console.log("result", result);
							} else {
								console.log("ERRO", result);
							}
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
				</AssetsForm>
				<InputButton></InputButton>
				<p className="after-message">
					A API utilizada é gratuita, por isso ela possui um limite de
					5 chamadas por minuto, ou 500 por dia. ;)
				</p>
			</div>
			<div className="div__graph">
				<Graph></Graph>
			</div>
		</div>
	);
}

export default App;
