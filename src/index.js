import createCalculator from './calculator.js';
import createClickListener from './click-listener.js';

const calculator = createCalculator();
const clickListener = createClickListener(document);

clickListener.subscribe((clickedElement) => {
	const isOperandClick = clickedElement.classList.contains('button-operand');
	const isOperatorClick = clickedElement.classList.contains('button-operator');
	const isClearClick = clickedElement.classList.contains('button-clear');

	if (isOperandClick) {
		calculator.appendNumbers(clickedElement.innerText);
	}

	if (isClearClick) {
		calculator.clear();
	}

	if (isOperatorClick) {
		calculator.setOperator(clickedElement.innerText);
	}
});

clickListener.subscribe(() => {
	const previousOperand = document.querySelector('.previous-operand');
	const currentOperand = document.querySelector('.current-operand');

	previousOperand.innerText = calculator.state.previousOperand;
	currentOperand.innerText = calculator.state.currentOperand;
});
