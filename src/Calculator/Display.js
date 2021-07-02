import Digit from './Digit.js';

export default () => {
	const Display = document.createElement('div');
	Display.append(Digit('2'));
	Display.append(Digit('1'));
	return Display;
};
