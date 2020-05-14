import React from "react";
import PropTypes from "prop-types";

const CartResume = ({ itemsInCart, onTabChange }) => (
	<div className="App-nav-cartResume">
		<div />
		<span onClick={() => onTabChange(1)}>
			<i className="fas fa-shopping-cart"></i> {itemsInCart} items
		</span>
	</div>
);

CartResume.propTypes = {
	itemsInCart: PropTypes.number.isRequired,
};

export default CartResume;
