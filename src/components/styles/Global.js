import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400&display=swap');
    @font-face{
        font-family: PP Monument Extended;
        src: Local("PP Monument Extended"), url(./fonts/PPMonumentExtended.otf) format('opentype')
    }
    @font-face{
        font-family: "Shapiro";
        src: Local("Shapiro"), url(./fonts/ShapiroFeatherText.otf) format('opentype')
    }
    body{
        background: #000000;
        color: #FFFFFF;
        max-width: 1920px;
        margin: 0 auto;
    }
    h1{
        font-family: PP Monument Extended;
        font-size: 3em;
    }
    p{
        font-family: Montserrat;
        font-weight: 300;
        font-size: 1.4em;
        line-height: 1.6;
    }
    @media only screen and (max-width: 570px) {
		h1 {
			font-size: 2rem;
		}
        p {
            font-size: 1rem;
        }
	}
`;

export default GlobalStyles;
