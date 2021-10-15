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
	grid-template-columns: repeat(auto-fit, minmax(32rem, 1fr));
	justify-content: center;
	justify-items: center;
	column-gap: 2rem;
	grid-row-gap: 3rem;
	overflow: hidden;

	@media only screen and (max-width: 570px) {
		grid-template-columns: 1fr;
		grid-row-gap: 0rem;
	}
	.fusioncharts-container {
		width: 100% !important;
	}
	svg {
		width: 100% !important;
	}
	p {
		font-size: 1rem;
		padding: 0px 10px 0 10px;
	}
`;

export const ChartWrapper = styled.div`
	max-width: 40rem;
	@media only screen and (max-width: 480px) {
		max-width: 30rem;
	} ;
`;
