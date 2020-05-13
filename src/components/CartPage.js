import React, { Fragment } from "react";
import PropTypes from "prop-types";
import "./CartPage.css";
import Item from "./Item";

function CartPage({ items, onAddOne, onRemoveOne }) {
	if (items.length) {
		return (
			<Fragment>
				<ul className="CartPage-items">
					{items.map((item) => (
						<li key={item.id} className="CartPage-item">
							<Item item={item}>
								<div className="CartItem-controls">
									<button
										className="CartItem-removeOne"
										onClick={() => onRemoveOne(item)}
									>
										&ndash;
									</button>
									<span className="CartItem-count">{item.count}</span>
									<button
										className="CartItem-addOne"
										onClick={() => onAddOne(item)}
									>
										+
									</button>
								</div>
							</Item>
						</li>
					))}
				</ul>
				<div className="CartPage-total">
					Total:{" "}
					{items
						.reduce((total, item) => {
							total += item.price * item.count;
							return total;
						}, 0)
						.toFixed(2)}
					$
				</div>
			</Fragment>
		);
	} else {
		return (
			<div className="Empty-cart">
				<img src={process.env.PUBLIC_URL + "/images/empty_cart.png"} alt="" />
			</div>
		);
	}
}

CartPage.propTypes = {
	items: PropTypes.array.isRequired,
	onAddOne: PropTypes.func.isRequired,
	onRemoveOne: PropTypes.func.isRequired,
};

export default CartPage;
