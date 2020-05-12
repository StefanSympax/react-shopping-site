import React, { Fragment } from "react";
import PropTypes from "prop-types";
import "./ItemPage.css";

const ItemPage = ({ items }) => {
	return (
		<ul className="ItemPage-items">
			{items.map((item) => (
				<li key={item.id} className="ItemPage-item">
					{item.name}
				</li>
			))}
		</ul>
	);
};

// const Item = () => <div></div>;

ItemPage.propTypes = {};

//PropTypes
ItemPage.propTypes = {
	items: PropTypes.array.isRequired,
};

// export default { ItemPage, Item };
export default ItemPage;
