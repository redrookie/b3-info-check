import "./_InputDate.scss";
import PropTypes from "prop-types";

const InputDate = ({ value, id }) => {
	return (
		<div className="input-date">
			<label htmlFor={id} className="input-date__label">
				{value}
			</label>
			<input
				required
				className="input-date__input-field"
				type="date"
				id={id}
			/>
		</div>
	);
};

InputDate.propTypes = {
	value: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
};

export default InputDate;
