import "./_InputTextBox.scss";

const InputTextBox = ({ value = "" }) => {
	return (
		<>
			<label htmlFor="assets_name" className="input-box__label">
				Nome:
			</label>
			<input
				className="input-box__input-field"
				type="text"
				placeholder={value}
				id="assets_name"
			/>
		</>
	);
};

export default InputTextBox;
