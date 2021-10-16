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
		margin: 0px 30px 40px 10px;
		max-width: 60ch;
	}
	g .raphael-group-177-caption {
		margin-right: 45px;
	}
`;

export const ChartWrapper = styled.div`
	width: 100%;
	height: 100%;
	article {
		width: 100%;
		display: flex;
		flex-direction: column;
		margin-left: 2.5rem;
	}
	display: flex;
	flex-direction: column;
	align-items: center;
	/* margin: 0 auto; */
	background-color: #191919;
	border-radius: 20px;
`;
