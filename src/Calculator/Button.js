export default (props) => {
	const { type, value, span, onClickButton } = props;

	const Button = document.createElement('button');

	Button.classList.add('button', `button-${type}`);
	span && Button.classList.add(`button-span-${span}`);
	Button.innerText = value;
	Button.addEventListener('click', onClickButton);

	return Button;
};
