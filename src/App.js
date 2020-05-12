import React, { Component } from "react";
import Nav from "./components/nav/Nav";
import ItemPage from "./components/itempage/ItemPage";
import { items } from "./static";
import "./App.css";

class App extends Component {
	state = {
		activeTab: 0,
	};

	handleTabChange = (index) => {
		this.setState({ activeTab: index });
	};

	renderContent() {
		switch (this.state.activeTab) {
			default:
			case 0:
				return <ItemPage items={items} />;
			case 1:
				return <span>Cart</span>;
		}
	}

	render() {
		let { activeTab } = this.state;

		return (
			<div className="App">
				<Nav activeTab={activeTab} onTabChange={this.handleTabChange} />
				<div className="App-content">{this.renderContent()}</div>
			</div>
		);
	}
}

export default App;
