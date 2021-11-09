import { useState, useEffect } from 'react';

// function name for custom hook !!! has to start with 'use'
const useCounter = (forwards = true) => {
	//default value = true, can remove from forwardcounter
	const [counter, setCounter] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			if (forwards) {
				setCounter((prevCounter) => prevCounter + 1);
			} else {
				setCounter((prevCounter) => prevCounter - 1);
			}
		}, 1000);

		return () => clearInterval(interval);
	}, [forwards]);

	return counter;
};

export default useCounter;

// only the logic is shared, not the concrete state
