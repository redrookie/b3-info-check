import "./_InputButton.scss";
import PropTypes from "prop-types";

const InputButton = ({ text }) => {
	return (
		<input
			className="input-button__input-field"
			type="submit"
			form="assets-form"
			value={text}
		/>
	);
};

InputButton.propTypes = {
	text: PropTypes.string,
};

export default InputButton;
