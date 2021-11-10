import { useState, useRef, useEffect } from 'react';

const SimpleInput = (props) => {
	const nameInputRef = useRef();
	const [enteredName, setEnteredName] = useState('');
	const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
	const [enteredNameTouched, setEnteredNameTouched] = useState(false);

	useEffect(() => {
		if (enteredNameIsValid) {
			console.log('Name Input is Valid!');
		}
	}, [enteredNameIsValid]);

	const nameInputchangeHandler = (event) => {
		setEnteredName(event.target.value);
	};

	const formSubmissionHandler = (event) => {
		event.preventDefault();

		setEnteredNameTouched(true);

		if (enteredName.trim() === '') {
			//trim removes excess whitespace
			setEnteredNameIsValid(false);
			return;
		}
		setEnteredNameIsValid(true);

		console.log(enteredName);

		const enteredValue = nameInputRef.current.value;
		console.log(enteredValue);

		setEnteredName(''); // for useState - clean way

		// nameInputRef.current.value(''); // not cool to directly manipulate the DOM
	};

	const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

	const nameInputClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-control';

	return (
		<form onSubmit={formSubmissionHandler}>
			<div className={nameInputClasses}>
				<label htmlFor='name'>Your Name</label>
				<input ref={nameInputRef} type='text' id='name' onChange={nameInputchangeHandler} value={enteredName} />
				{nameInputIsInvalid && <p className='error-text'>Name must not be empty!</p>}
			</div>
			<div className='form-actions'>
				<button>Submit</button>
			</div>
		</form>
	);
};

export default SimpleInput;
