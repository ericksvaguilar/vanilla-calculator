import createCalculator from './calculator.js';
import createClickListener from './click-listener.js';

const calculator = createCalculator();
const clickListener = createClickListener(document);

clickListener.subscribe((clickedElement) => {
	const isOperandClick = clickedElement.classList.contains('button-operand');

	if (isOperandClick) {
		calculator.appendNumbers(clickedElement.innerText);
	}
});

clickListener.subscribe(() => {
	const previousOperand = document.querySelector('.previous-operand');
	const currentOperand = document.querySelector('.current-operand');

	previousOperand.innerText = calculator.state.previousOperand;
	currentOperand.innerText = calculator.state.currentOperand;
});
