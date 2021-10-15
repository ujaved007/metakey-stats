import React from "react";
import { Pie3D, Bar3D, Column3D } from "./charts/index";
import { dataWallets, dataDistribution } from "./data/data";
import { StatsGrid, Wrapper, ChartWrapper } from "./styles/StatsGrid.styled";

const Stats = () => {
	const allHolders = dataWallets.reduce((prev, curr) => {
		return { label: "All Holders", value: prev.value + curr.value };
	});
	const uniqueHolders = [...dataWallets, allHolders];
	return (
		<Wrapper>
			<StatsGrid>
				<ChartWrapper>
					<div>
						<Column3D data={uniqueHolders} />
					</div>
				</ChartWrapper>
				<ChartWrapper>
					<div>
						<Pie3D data={dataWallets} />
					</div>
				</ChartWrapper>
				<ChartWrapper>
					<div>
						<Bar3D data={dataDistribution} />
						<p>
							Higher the Holder distribution %, the higher the “intent to hold”
							of the edition as there’s less people with multiples they’ll
							likely sell. (Eg, 100% distribution means each key is owned by
							only 1 person/wallet).
						</p>
					</div>
				</ChartWrapper>
			</StatsGrid>
		</Wrapper>
	);
};

export default Stats;
