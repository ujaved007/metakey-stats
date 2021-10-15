import React from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Column2D from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

const ChartComponent = ({ data }) => {
	const chartConfigs = {
		type: "pie3d",
		width: "100%",
		height: 400,
		dataFormat: "json",
		dataSource: {
			chart: {
				caption: "UNIQUE HOLDER WALLETS PERCENT",
				startingAngle: "0",
				showPercentValues: "1",
				decimals: "1",
				useDataPlotColorForLabels: "1",
				theme: "fusion",
				paletteColors: "#F5BA2E, #F47A22, #8525D0, #50D084, #F4045A",
				bgColor: "#000000",
				captionFontColor: "#FFFFFF",
				baseFont: "Montserrat",
				baseFontSize: "0.9rem",
				captionFontSize: "1.1rem",
				baseFontColor: "#FFFFFF",
				showLegend: 0,
				use3DLighting: 1,
				formatNumberScale: 0,
				captionOnTop: 0,
				enableSmartLabels: 0,
				labelDistance: 0,
				captionPadding: -30,
				alignCaptionWithCanvas: 1,
				captionAlignment: "center",
			},
			data,
		},
	};
	return <ReactFC {...chartConfigs} />;
};

export default ChartComponent;
