//module import
import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";

//style import
import "./App.scss";

//component imports
import Header from "./components/Header";
import Footer from "./components/Footer";
import RouteContainer from "./components/RouteContainer";

class App extends Component {
	state = {};

	render() {
		return (
			<BrowserRouter>
				<div id="content">
					<Header />
					<RouteContainer />
					<Footer />
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
