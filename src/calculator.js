const createCalculator = () => {
	const state = {
		previousOperand: '',
		currentOperand: '',
	};

	const appendNumbers = (numberAsString) => {
		state.currentOperand += numberAsString;
	};

	return { appendNumbers, state };
};

export default createCalculator;
