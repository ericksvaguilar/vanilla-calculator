import Digit from './Digit.js';

export default () => {
	const Display = document.createElement('div');

	Display.classList.add('display');

	Display.append(Digit('2', 'operand'));
	Display.append(Digit('+', 'operator'));

	return Display;
};
