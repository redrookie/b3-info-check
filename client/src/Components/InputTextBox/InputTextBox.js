import "./_InputTextBox.scss";
import PropTypes from "prop-types";

const InputTextBox = ({ value = "" }) => {
	return (
		<div className="input-text-box">
			<label htmlFor="assets_name" className="input-box__label">
				{value}
			</label>
			<input
				className="input-box__input-field"
				type="text"
				id="assets_name"
				required
			/>
		</div>
	);
};

InputTextBox.propTypes = {
	value: PropTypes.string.isRequired,
};

export default InputTextBox;
