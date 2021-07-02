export default ({ type, value }) => {
	const Button = document.createElement('button');

	Button.classList.add('button', `button-${type}`);
	Button.innerText = value;

	return Button;
};
