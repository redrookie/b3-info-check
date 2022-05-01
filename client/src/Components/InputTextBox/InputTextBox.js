import "./_InputTextBox.scss";
import PropTypes from "prop-types";

const InputTextBox = ({ value = "" }) => {
	return (
		<>
			<label htmlFor="assets_name" className="input-box__label">
				{value}
			</label>
			<input
				className="input-box__input-field"
				type="text"
				id="assets_name"
				required
			/>
		</>
	);
};

InputTextBox.propTypes = {
	value: PropTypes.string.isRequired,
};

export default InputTextBox;
