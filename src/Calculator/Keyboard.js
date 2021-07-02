import { buttons } from '../data/buttons.js';
import Button from './Button.js';

export default () => {
	const Keyboard = document.createElement('div');

	Keyboard.classList.add('keyboard');

	buttons.forEach((button) => {
		Keyboard.append(Button(button));
	});

	return Keyboard;
};
