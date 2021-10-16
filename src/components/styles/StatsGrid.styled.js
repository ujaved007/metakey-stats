import styled from "styled-components";

export const Wrapper = styled.div`
	max-width: 90vw;
	margin: 0 auto;
	@media only screen and (max-width: 570px) {
		max-width: 100vw;
	}
`;

export const StatsGrid = styled.div`
	margin-top: 70px;
	margin-bottom: 100px;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
	justify-content: center;
	justify-items: center;
	align-items: end;
	column-gap: 3rem;
	grid-row-gap: 3rem;
	overflow: hidden;

	@media only screen and (max-width: 580px) {
		grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
		p {
			font-size: 0.8rem;
		}
	}

	p {
		font-size: 1rem;
		margin: 0px 30px 40px 30px;
		max-width: 60ch;
	}
`;

export const ChartWrapper = styled.div`
	width: 100%;
	height: 100%;
	article {
		width: 100%;
		display: flex;
		flex-direction: column;
	}
	display: flex;
	flex-direction: column;
	align-items: center;
	/* margin: 0 auto; */
	background-color: #191919;
	border-radius: 20px;
	.bar-chart {
		padding-left: 20px;
	}
`;

export const PieChartWrapper = styled(ChartWrapper)`
	@media only screen and (max-width: 1119px) {
		align-items: flex-end;
		.pie-chart {
			width: 90% !important;
		}
		article {
			width: 90%;
		}
	}
	@media only screen and (max-width: 589px) {
		align-items: center;
		.pie-chart {
			width: 100% !important;
			height: 16rem !important;
		}
		article {
			width: 100%;
			height: 16rem;
		}
	}
`;
