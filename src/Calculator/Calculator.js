import Display from './Display.js';
import Keyboard from './Keyboard.js';
const onClickButton = (event) => {
	console.log(event.target.innerText);
};

export default () => {
	const Calculator = document.createElement('div');

	Calculator.classList.add('calculator');

	Calculator.append(Display());
	Calculator.append(Keyboard(onClickButton));
	return Calculator;
};
