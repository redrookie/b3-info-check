import "./_AssetsForm.scss";

const AssetsForm = ({ children }) => {
	return (
		<div className="assets-form__wrapper">
			<form>{children}</form>
		</div>
	);
};

export default AssetsForm;
