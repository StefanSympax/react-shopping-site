import React from "react";
import "./Footer.css";
import PropTypes from "prop-types";

const Footer = ({ owner }) => {
	return (
		<div className="Footer-container">
			<div className="Footer-socialMedia">
				<i className="fab fa-facebook-square Icon-facebook"></i>
				<i className="fab fa-instagram-square Icon-instagram"></i>
				<i className="fab fa-twitter-square Icon-twitter"></i>
				<i className="fab fa-whatsapp-square Icon-whatsapp"></i>
				<i className="fab fa-linkedin Icon-linkedin"></i>
				<i className="fab fa-youtube-square Icon-youtube"></i>
			</div>
			<div className="Footer-termsPolicy">
				<span>Terms</span>
				<span>Privacy Policy</span>
				<span>Cookies Policy</span>
			</div>
			<div className="Footer-copyRights">
				<i className="fas fa-copyright">
					{" "}
					{owner} Copyright 2020. All rights reserved.
				</i>
			</div>
		</div>
	);
};

Footer.propTypes = {
	owner: PropTypes.string.isRequired,
};

export default Footer;
