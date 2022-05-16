import "../App.scss";
import { React, useState } from "react";
import InputTextBox from "../Components/InputTextBox/InputTextBox";
import AssetsForm from "../Components/AssetsForm";
import InputDate from "../Components/InputDate";
import InputButton from "../Components/InputButton/InputButton";
import handleSubmit from "../modules/handleSubmit";
import Chart from "../Components/Chart/Chart";
import DarkModeSwitch from "../Components/DarkModeSwitch";

function App() {
	function handleDarkLightMode(e) {
		setLightMode(!lightMode);
		let checkbox = document.querySelectorAll(".light-mode-switch")[0];
		const isChecked = checkbox.checked;
		e.preventDefault();
		checkbox.checked = !isChecked;
	}

	const [value, setValue] = useState(null);
	const [lightMode, setLightMode] = useState(false);
	const [feedbackText, setFeedbackText] = useState("");
	const [sendButtonText, setSendButtonText] = useState("Enviar");

	return (
		<div className={`App ${lightMode ? "light-mode" : ""}`}>
			<DarkModeSwitch
				isLightMode={lightMode}
				onClick={(e) => {
					handleDarkLightMode(e);
				}}
			></DarkModeSwitch>
			<div className="div__form">
				<AssetsForm
					onSubmit={(e) => {
						setSendButtonText("Enviando...");
						handleSubmit(e).then(function (result) {
							if (!!result && result.status === 200) {
								let errorInRequest = false;
								result["data"] = result["data"].filter(
									(elem) => {
										if (!!elem["message"]) {
											errorInRequest = true;
											return false;
										}
										return true;
									}
								);
								if (errorInRequest)
									setFeedbackText(
										"Uma ou mais requisições resultaram em erro. Verifique os nomes digitados! Também é possível que o limite de requisições tenha sido atingido. Aguarde um instante!"
									);
								else
									setFeedbackText(
										"Dados enviados com sucesso!"
									);
								setValue(result);
								setSendButtonText("Enviar");
							} else {
								console.error(result);
								setFeedbackText(result.message); //TODO Tratar melhor erros (ex: datas de dias não úteis)
								setSendButtonText("Enviar");
							}
						});
					}}
					feedbackText={feedbackText}
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
				<InputButton text={sendButtonText}></InputButton>
				<p className="after-message">
					A API utilizada é gratuita, por isso ela possui um limite de
					5 chamadas por minuto, ou 500 por dia. ;)
				</p>
			</div>
			<div className="div__graph">
				<Chart value={value}></Chart>
			</div>
		</div>
	);
}

export default App;
