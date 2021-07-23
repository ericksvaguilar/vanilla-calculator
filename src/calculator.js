const createCalculator = () => {
	const state = {
		previousOperand: '',
		currentOperand: '',
		operator: '',
	};

	const appendNumbers = (number) => {
		const hasComma = number === '.' && state.currentOperand.includes('.');

		if (hasComma) return;

		state.currentOperand += number;
	};

	const compute = () => {
		const previous = parseFloat(state.previousOperand);
		const current = parseFloat(state.currentOperand);

		// if ((!state.operator && !previous) || (!state.operator && !current)) {
		// 	return;
		// }

		if (!previous) {
			state.previousOperand = current;
			state.currentOperand = '';
			return;
		};

		const operation = {
			'+': () => previous + current,
			'÷': () => previous / current,
			'−': () => previous - current,
			'×': () => previous * current,
		};

		const operationFunction = operation[state.operator];

		if (!operationFunction) return;

		state.previousOperand = operationFunction();
		state.currentOperand = '';

	};

	const setOperator = (operator) => {
		state.operator = operator;

		compute();
	};

	const clear = () => {
		state.previousOperand = '';
		state.currentOperand = '';
		state.operator = '';
	};

	return {
		appendNumbers,
		state,
		clear,
		compute,
		setOperator
	};
};

export default createCalculator;