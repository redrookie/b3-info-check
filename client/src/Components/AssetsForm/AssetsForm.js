import "./_AssetsForm.scss";
import PropTypes from "prop-types";
import FeedbackTooltip from "../FeedbackTooltip";

const AssetsForm = ({ children, onSubmit }) => {
	return (
		<div className="assets-form__wrapper">
			<form onSubmit={onSubmit} id="assets-form">
				{children}
			</form>
			<FeedbackTooltip></FeedbackTooltip>
		</div>
	);
};

AssetsForm.propTypes = {
	children: PropTypes.array,
	onSubmit: PropTypes.func,
};

export default AssetsForm;
