import "./_FeedbackTooltip.scss";
import PropTypes from "prop-types";

const FeedbackTooltip = ({ text = "" }) => {
	return (
		<div className="feedback-tooltip__wrapper hide">
			<p className="feedback-tooltip__text">{text}</p>
		</div>
	);
};

FeedbackTooltip.propTypes = {
	text: PropTypes.string,
};

export default FeedbackTooltip;
