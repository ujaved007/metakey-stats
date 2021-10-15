import React from "react";
import { StyledNavbar, Logo } from "./styles/Navbar.styled";
import logo from "../assets/logo.svg";

const Navbar = () => {
	return (
		<StyledNavbar>
			<Logo src={logo}></Logo>
		</StyledNavbar>
	);
};

export default Navbar;
