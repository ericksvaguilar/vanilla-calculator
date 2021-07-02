import Display from './Display.js';
import Keyboard from './Keyboard.js';

export default () => {
	const Calculator = document.createElement('div');

	Calculator.classList.add('calculator');

	Calculator.append(Display());
	Calculator.append(Keyboard());
	return Calculator;
};
