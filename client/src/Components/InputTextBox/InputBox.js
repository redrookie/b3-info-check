import "./_InputTextBox.css";

const InputBox = ({ value = "" }) => {
	return (
		<>
			<label className="input-box__label">Nome:</label>
			<input
				className="input-box__input-field"
				type="text"
				placeholder={value}
			/>
		</>
	);
};

export default InputBox;
