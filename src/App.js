import Calculator from './Calculator/Calculator.js';

const App = () => {
	const App = document.createElement('div');

	App.setAttribute('class', 'App');
	App.append(Calculator());

	return App;
};

export default App;
