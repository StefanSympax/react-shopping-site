import React from "react";

const Nav = ({ activeTab, onTabChange }) => (
	<nav className="App-nav">
		<ul>
			<li className={`App-nav-item ${activeTab === 0 && "selected"}`}>
				<span onClick={() => onTabChange(0)}>Items</span>
			</li>
			<li className={`App-nav-item ${activeTab === 1 && "selected"} `}>
				<span onClick={() => onTabChange(1)}>Cart</span>
			</li>
		</ul>
	</nav>
);

export default Nav;
