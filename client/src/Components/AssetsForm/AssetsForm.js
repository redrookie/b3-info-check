import "./_AssetsForm.scss";
import PropTypes from "prop-types";
import FeedbackTooltip from "../FeedbackTooltip";

const AssetsForm = ({ children, onSubmit, feedbackText }) => {
	return (
		<div className="assets-form__wrapper">
			<form onSubmit={onSubmit} id="assets-form">
				{children}
			</form>
			<FeedbackTooltip text={feedbackText}></FeedbackTooltip>
		</div>
	);
};

AssetsForm.propTypes = {
	children: PropTypes.array,
	onSubmit: PropTypes.func,
	feedbackText: PropTypes.string,
};

export default AssetsForm;
