import React from "react";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
);

const options = {
	responsive: true,
	plugins: {
		legend: {
			position: "top",
		},
		title: {
			display: true,
			text: "Valores dos ativos",
		},
	},
};

// const labels = ["January", "February", "March", "April", "May", "June", "July"];

// export const data = {
// 	labels,
// 	datasets: [
// 		{
// 			label: "Dataset 1",
// 			data: [1, 2, 3, 4, 5, 6, 7],
// 			borderColor: "rgb(255, 99, 132)",
// 			backgroundColor: "rgba(255, 99, 132, 0.5)",
// 		},
// 		{
// 			label: "Dataset 2",
// 			data: [15, 20, 30, 40, 50, 60, 7],
// 			borderColor: "rgb(53, 162, 235)",
// 			backgroundColor: "rgba(53, 162, 235, 0.5)",
// 		},
// 	],
// };

const Graph = ({ value }) => {
	if (!value || !value.data[0]) return null;
	console.log("cheguei no graph", value);
	let dates = value.data[0]?.data?.map((date) => {
		return date["Date"];
	});
	let datasets = value.data.map((asset) => {
		if (!asset) return null;
		return {
			label: asset.name,
			data: asset.data.map((value) => {
				return parseFloat(value["Value"]);
			}),
			borderColor: "rgb(253, 162, 235)",
			backgroundColor: "rgba(253, 162, 235, 0.5)",
		};
	});
	let data = {
		labels: dates,
		datasets: datasets,
	};
	console.log("datasets", datasets);
	console.log("data", data);
	return <Line options={options} data={data} />;
};

export default Graph;
