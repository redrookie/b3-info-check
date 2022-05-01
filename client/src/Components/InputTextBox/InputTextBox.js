import "./_InputTextBox.scss";

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

export default InputTextBox;
