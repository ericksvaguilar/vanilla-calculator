export default (text, type = 'operand') => {
	const Digit = document.createElement('span');

	Digit.classList.add('digit', `digit-${type}`);
	Digit.innerText = text;

	return Digit;
};
