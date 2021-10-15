import React from "react";
import { HeaderStyled } from "./styles/Header.styled";

const Header = () => {
	return (
		<HeaderStyled>
			<div>
				<h1>WHO HOLDS METAKEY?</h1>
			</div>
			<div>
				<p>Data refreshes every ~30 minutes.</p>
			</div>
		</HeaderStyled>
	);
};

export default Header;
