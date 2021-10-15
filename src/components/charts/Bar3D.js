import React from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Column2D from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

const ChartComponent = ({ data }) => {
	const chartConfigs = {
		type: "bar3d",
		width: "100%",
		height: "500",
		dataFormat: "json",
		dataSource: {
			chart: {
				caption: "Holder Distribution %",
				subCaption: "Calculated from (Unique Wallets/Total Supply) x 100",
				useDataPlotColorForLabels: "1",
				theme: "fusion",
				paletteColors: "#F5BA2E, #F47A22, #8525D0, #50D084, #F4045A",
				bgColor: "#000000",
				captionFontColor: "#FFFFFF",
				subCaptionFontColor: "#FFFFFF",
				plotSpacePercent: "20%",
				use3DLighting: 0,
				formatNumberScale: 0,
				showValues: 1,
				numberSuffix: "%",
				valueFontColor: "#FFFFFF",
				divLineColor: "#000000",
				captionOnTop: 0,
				captionPadding: 30,
				alignCaptionWithCanvas: 0,
			},
			data,
		},
	};
	return <ReactFC {...chartConfigs} />;
};

export default ChartComponent;
