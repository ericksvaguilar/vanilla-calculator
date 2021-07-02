import Display from './Display.js';

export default () => {
	const Calculator = document.createElement('div');
	Calculator.append(Display());
	return Calculator;
};
