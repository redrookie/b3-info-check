import PropTypes from "prop-types";
import "./_DarkModeSwitch.scss";
import { React, useState } from "react";

const DarkModeSwitch = ({ isDarkMode = false, onClick }) => {
	return (
		<label className="switch" onClick={onClick}>
			<input type="checkbox" className="light-mode-switch" />
			<span className="slider round"></span>
		</label>
	);
};

DarkModeSwitch.propTypes = {
	isDarkMode: PropTypes.bool,
	onClick: PropTypes.func,
};

export default DarkModeSwitch;
