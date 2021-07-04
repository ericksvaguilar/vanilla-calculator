const createClickListener = (document) => {
	const observers = [];

	const subscribe = (observerFunction) => observers.push(observerFunction);

	const notifyAll = (clickedElement) => {
		observers.forEach((observerFunction) => observerFunction(clickedElement));
	};

	const handleClick = (event) => {
		const clickedElement = event.target;

		notifyAll(clickedElement);
	};

	document.addEventListener('click', handleClick);

	return {
		subscribe,
	};
};

export default createClickListener;
