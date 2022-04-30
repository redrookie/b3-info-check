import "./_InputDate.scss";
import PropTypes from "prop-types";

const InputDate = ({ value, id }) => {
	return (
		<>
			<label htmlFor={id} className="input-date__label">
				{value}
			</label>
			<input className="input-date__input-field" type="date" id={id} />
		</>
	);
};

InputDate.propTypes = {
	value: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
};

export default InputDate;
