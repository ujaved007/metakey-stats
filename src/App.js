import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Stats from "./components/Stats";
import GlobalStyles from "./components/styles/Global";

const App = () => {
	return (
		<div>
			<GlobalStyles />
			<Navbar></Navbar>
			<Header></Header>
			<Stats />
		</div>
	);
};

export default App;
