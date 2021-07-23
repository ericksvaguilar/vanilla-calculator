import createCalculator from './calculator.js';
import createClickListener from './click-listener.js';

const calculator = createCalculator();
const clickListener = createClickListener(document);

clickListener.subscribe((clickedElement) => {
	const isOperandClick = clickedElement.classList.contains('button-operand');
	const isOperatorClick = clickedElement.classList.contains('button-operator');
	const isClearClick = clickedElement.classList.contains('button-clear');
	const isEqualClick = clickedElement.classList.contains('button-equal');

	if (isOperandClick) {
		calculator.appendNumbers(clickedElement.innerText);
	}

	if (isClearClick) {
		calculator.clear();
	}

	if (isOperatorClick) {
		calculator.setOperator(clickedElement.innerText);
	}

	if (isEqualClick) {
		calculator.compute();
	}
});

clickListener.subscribe(() => {
	const previousOperand = document.querySelector('.previous-operand');
	const currentOperand = document.querySelector('.current-operand');
	const operator = document.querySelector('.operator');

	previousOperand.innerText = calculator.state.previousOperand;
	currentOperand.innerText = calculator.state.currentOperand;
	operator.innerText = calculator.state.operator;
});