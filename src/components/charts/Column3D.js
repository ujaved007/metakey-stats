import React from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Column2D from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

const ChartComponent = ({ data }) => {
	const chartConfigs = {
		type: "column3d",
		width: "100%",
		height: 500,
		dataFormat: "json",
		dataSource: {
			chart: {
				caption: "UNIQUE HOLDER WALLETS",
				useDataPlotColorForLabels: "1",
				theme: "fusion",
				paletteColors: "#F5BA2E, #F47A22, #8525D0, #50D084, #F4045A",
				bgColor: "#000000",
				captionFontColor: "#FFFFFF",
				baseFont: "Montserrat",
				baseFontSize: "0.9rem",
				baseFontColor: "#FFFFFF",
				captionFontSize: "1.1rem",
				use3DLighting: 0,
				formatNumberScale: 0,
				showValues: 1,
				valueFontColor: "#FFFFFF",
				divLineColor: "#000000",
				numDivLines: 8,
				captionOnTop: 0,
				captionPadding: 30,
				showShadow: 1,
				overlapColumns: 1,
				alignCaptionWithCanvas: 0,
			},
			data,
		},
	};
	return <ReactFC {...chartConfigs} />;
};

export default ChartComponent;
