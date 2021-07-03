export default ({ type, value, span }) => {
	const Button = document.createElement('button');

	Button.classList.add('button', `button-${type}`);
	span && Button.classList.add(`button-span-${span}`);
	Button.innerText = value;

	return Button;
};
