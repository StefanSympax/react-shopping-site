import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

const Nav = ({ activeTab, onTabChange }) => (
	<nav className="App-nav">
		<ul>
			<li className={`App-nav-item ${activeTab === 0 && "selected"}`}>
				<NavLink index={0} onClick={onTabChange}>
					<Fragment>Items</Fragment>
				</NavLink>
			</li>
			<li className={`App-nav-item ${activeTab === 1 && "selected"} `}>
				<NavLink index={1} onClick={onTabChange}>
					<Fragment>Cart</Fragment>
				</NavLink>
			</li>
		</ul>
	</nav>
);

class NavLink extends Component {
	handleClick = () => {
		this.props.onClick(this.props.index);
	};

	render() {
		return <span onClick={this.handleClick}>{this.props.children}</span>;
	}
}

Nav.propTypes = {
	activeTab: PropTypes.number.isRequired,
	onTabChange: PropTypes.func.isRequired,
};

NavLink.propTypes = {
	index: PropTypes.number.isRequired,
	onClick: PropTypes.func.isRequired,
	children: PropTypes.element.isRequired,
};

export default Nav;
