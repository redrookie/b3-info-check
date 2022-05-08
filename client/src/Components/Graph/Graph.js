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

export const colors = [
	"rgb(253, 162, 235)",
	"rgb(249, 18, 18)",
	"rgb(253, 162, 235)",
	"rgb(20, 19, 19)",
	"rgb(255, 255, 255)",
];

const Graph = ({ value }) => {
	if (!value || !value.data[0]) return null;

	console.log("cheguei no graph", value);
	let dates = value.data[0]?.data?.map((date) => {
		return date["Date"];
	});
	let datasets = value.data?.map((asset, index) => {
		if (!asset) return null;
		if (!!asset["message"]) {
			let classlist = document.querySelectorAll(
				".feedback-tooltip__wrapper"
			)[0];
			classlist.className = "feedback-tooltip__wrapper server-error";
			return null;
		}
		return {
			label: asset.name,
			data: asset.data?.map((value) => {
				return parseFloat(value["Value"]);
			}),
			borderColor: colors[index],
			backgroundColor: colors[index],
		};
	});
	datasets = datasets.filter((elem) => {
		if (!elem || !elem["label"]) return false;
		return true;
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
