import "./_AssetsForm.scss";
import PropTypes from "prop-types";

const AssetsForm = ({ children, onSubmit }) => {
	return (
		<div className="assets-form__wrapper">
			<form onSubmit={onSubmit}>{children}</form>
		</div>
	);
};

AssetsForm.propTypes = {
	children: PropTypes.array,
	onSubmit: PropTypes.func,
};

export default AssetsForm;
