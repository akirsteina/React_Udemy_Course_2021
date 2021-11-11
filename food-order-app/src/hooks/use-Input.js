import { useState } from 'react';

const useInput = (validateValue) => {
	const [enteredValue, setEnteredValue] = useState('');
	const [inputTouched, setInputTouched] = useState(false);
	// const [nameInputError, setNameInputError] = useState(null);

	const enteredInputIsValid = validateValue(enteredValue);
	const hasError = !enteredInputIsValid && inputTouched;

	const enteredInputHandler = (event) => {
		setEnteredValue(event.target.value);
	};

	const inputBlurHandler = () => {
		setInputTouched(true);
	};

	const resetInput = () => {
		setEnteredValue('');
		setInputTouched(false);
	};

	return {
		enteredValue,
		enteredInputIsValid,
		hasError,
		enteredInputHandler,
		inputBlurHandler,
		resetInput,
	};
};

export default useInput;
