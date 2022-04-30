import "../App.css";
import { React, useState, useEffect } from "react";
import { dataMock } from "../mocks.js";
import InputBox from "../Components/InputTextBox/InputBox";
import AssetsForm from "../Components/AssetsForm";

function App() {
	const [value, setValue] = useState(null);

	// useEffect(() => {
	// 	fetch(
	// 		"https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=IBM&apikey=0ES12FDPP6C69U6M"
	// 	)
	// 		.then((res) => res.json())
	// 		.then((data) => {
	// 			setValue("data");
	// 			console.log("value", data["Monthly Time Series"]);
	// 		})
	// 		.catch((error) => console.log("Erro: ", error));
	// }, []);
	const data = dataMock || value;

	return (
		<div className="App">
			<header className="App-header">
				<AssetsForm>
					<InputBox value="Digite aqui os ativos"></InputBox>
				</AssetsForm>
				<p>
					Edit <code>src/App.js</code> and save to reload.
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
