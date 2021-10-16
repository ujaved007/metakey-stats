import React from "react";
import { Column2d, Pie2d, Bar2d } from "./charts/ChartOptions";
import Chart from "react-google-charts";
import { dataWallets, dataDistribution } from "./data/data";
import { StatsGrid, Wrapper, ChartWrapper } from "./styles/StatsGrid.styled";

const Stats = () => {
	//Total holders calculation for column graph
	const newArr = dataWallets.flat().filter((val) => typeof val == "number");
	const total = newArr.reduce((a, b) => a + b);
	const uniqueHolders = [...dataWallets, ["Total Holders", total]];

	return (
		<Wrapper>
			<StatsGrid>
				<ChartWrapper>
					<article>
						<Chart
							width={"100%"}
							height={"25rem"}
							chartType="ColumnChart"
							loader={<div>Loading Chart</div>}
							data={uniqueHolders}
							options={Column2d}
						/>
					</article>
				</ChartWrapper>
				<ChartWrapper>
					<article>
						<Chart
							width={"100%"}
							height={"25rem"}
							chartType="PieChart"
							loader={<div>Loading Chart</div>}
							data={dataWallets}
							options={Pie2d}
						/>
					</article>
				</ChartWrapper>
				<ChartWrapper>
					<article>
						<Chart
							width={"100%"}
							height={"25rem"}
							chartType="BarChart"
							loader={<div>Loading Chart</div>}
							data={dataDistribution}
							options={Bar2d}
						/>
						<p>
							Higher the Holder distribution %, the higher the “intent to hold”
							of the edition as there’s less people with multiples they’ll
							likely sell. (Eg, 100% distribution means each key is owned by
							only 1 person/wallet).
						</p>
					</article>
				</ChartWrapper>
			</StatsGrid>
		</Wrapper>
	);
};

export default Stats;
