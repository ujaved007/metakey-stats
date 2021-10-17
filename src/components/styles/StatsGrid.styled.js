import styled from "styled-components";

export const Wrapper = styled.div`
	max-width: 90vw;
	margin: 0 auto;
	@media only screen and (max-width: 589px) {
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
	align-items: start;
	column-gap: 3rem;
	grid-row-gap: 3rem;
	overflow: hidden;
	@media only screen and (max-width: 589px) {
		grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
	}
`;

export const ChartWrapper = styled.div`
	width: 100%;
	article {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: #191919;
	border-radius: 20px;
	.bar-chart {
		padding-left: 20px;
		margin-top: -20px;
	}
	.column-chart {
		padding-left: 20px;
		margin-top: -20px;
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
			height: 18rem;
		}
	}
`;

export const ChartTitle = styled.h3`
	font-size: 1.1rem;
	text-align: center;
	font-family: "Montserrat";
	margin-top: -30px;
	@media only screen and (max-width: 589px) {
		font-size: 0.8rem;
	}
`;

export const ChartCaption = styled.p`
	font-size: 0.8rem;
	text-align: center;
	font-family: "Montserrat";
	margin-top: -5px;
	@media only screen and (max-width: 589px) {
		font-size: 0.6rem;
	}
`;

export const ChartDesc = styled.p`
	font-size: 0.9rem;
	margin: 0px 30px 40px 30px;
	max-width: 60ch;
	text-align: center;
	@media only screen and (max-width: 589px) {
		font-size: 0.7rem;
	}
`;

export const PaddingBottom = styled.div`
	padding-bottom: 40px;
`;
