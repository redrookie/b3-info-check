import "./_AssetsForm.scss";
import PropTypes from "prop-types";
import ErrorTooltip from "../ErrorTooltip";

const AssetsForm = ({ children, onSubmit }) => {
	return (
		<div className="assets-form__wrapper">
			<form onSubmit={onSubmit}>{children}</form>
			<ErrorTooltip>Erro</ErrorTooltip>
		</div>
	);
};

AssetsForm.propTypes = {
	children: PropTypes.array,
	onSubmit: PropTypes.func,
};

export default AssetsForm;
