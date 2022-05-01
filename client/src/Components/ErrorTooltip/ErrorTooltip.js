import "./_ErrorTooltip.scss";
import PropTypes from "prop-types";

const ErrorTooltip = ({ text }) => {
	return (
		<div className="error-tooltip__wrapper hide">
			<p className="error-tooltip__text">{text}</p>
		</div>
	);
};

ErrorTooltip.propTypes = {
	text: PropTypes.string.isRequired,
};

export default ErrorTooltip;
