import "./_AssetsForm.scss";
import PropTypes from "prop-types";
import ErrorTooltip from "../ErrorTooltip";

const AssetsForm = ({ children, onSubmit }) => {
	return (
		<div className="assets-form__wrapper">
			<form onSubmit={onSubmit}>{children}</form>
			<ErrorTooltip
				text="As datas digitadas foram inválidas. Selecione uma data final que seja
			maior que a data inicial!"
			></ErrorTooltip>
		</div>
	);
};

AssetsForm.propTypes = {
	children: PropTypes.array,
	onSubmit: PropTypes.func,
};

export default AssetsForm;
