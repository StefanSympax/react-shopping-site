import React, { Component } from "react";

import Nav from "./components/nav/Nav";
import ItemPage from "./components/itempage/ItemPage";
import CartPage from "./components/cartpage/CartPage";

import { items } from "./static";
import "./App.css";

class App extends Component {
	state = {
		activeTab: 0,
		cart: [],
	};

	handleTabChange = (index) => {
		this.setState((state) => {
			return {
				activeTab: index,
				cart: state.cart,
			};
		});
	};

	handleAddToCart = (item) => {
		this.setState({
			cart: [...this.state.cart, item.id],
		});
	};

	handleRemoveOne = (item) => {
		let index = this.state.cart.indexOf(item.id);
		this.setState({
			cart: [
				...this.state.cart.slice(0, index),
				...this.state.cart.slice(index + 1),
			],
		});
	};

	renderCart = () => {
		let itemCounts = this.state.cart.reduce((itemCounts, itemId) => {
			itemCounts[itemId] = itemCounts[itemId] || 0;
			itemCounts[itemId]++;
			return itemCounts;
		}, {});

		console.log("Item counts object:", itemCounts);

		// Create an array of items
		let cartItems = Object.keys(itemCounts).map((itemId) => {
			// Find the item by its id
			var item = items.find((item) => item.id === parseInt(itemId, 10));

			// Create a new "item" and add the 'count' property
			return {
				...item,
				count: itemCounts[itemId],
			};
		});

		console.log("Cart items object:", cartItems);
		return (
			<CartPage
				items={cartItems}
				onAddOne={this.handleAddToCart}
				onRemoveOne={this.handleRemoveOne}
			/>
		);
	};

	renderContent() {
		switch (this.state.activeTab) {
			default:
			case 0:
				return <ItemPage items={items} onAddToCart={this.handleAddToCart} />;
			case 1:
				return this.renderCart();
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
