import { useState, useEffect } from 'react';

const SimpleInput = (props) => {
	// const nameInputRef = useRef();
	const [enteredName, setEnteredName] = useState('');
	const [enteredNameTouched, setEnteredNameTouched] = useState(false);
	const [formIsValid, setFormIsValid] = useState(false);

	const enteredNameIsValid = enteredName.trim() !== '';
	const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

	useEffect(() => {
		if (enteredNameIsValid) {
			setFormIsValid(true);
		} else {
			setFormIsValid(false);
		}
	}, [enteredNameIsValid]);

	const nameInputchangeHandler = (event) => {
		setEnteredName(event.target.value);
	};

	const nameInputBlurHandler = (event) => {
		setEnteredNameTouched(true);
	};

	const formSubmissionHandler = (event) => {
		event.preventDefault();
		setEnteredNameTouched(true);
		if (!enteredNameIsValid) {
			return;
		}
		console.log(enteredName);
		setEnteredName('');
		setEnteredNameTouched(false);
	};

	const nameInputClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-control';

	// ref={nameInputRef}
	return (
		<form onSubmit={formSubmissionHandler}>
			<div className={nameInputClasses}>
				<label htmlFor='name'>Your Name</label>
				<input type='text' id='name' onChange={nameInputchangeHandler} onBlur={nameInputBlurHandler} value={enteredName} />
				{nameInputIsInvalid && <p className='error-text'>Name must not be empty!</p>}
			</div>
			<div className='form-actions'>
				<button disabled={!formIsValid}>Submit</button>
			</div>
		</form>
	);
};

export default SimpleInput;

// const nameInputRef = useRef();
// const [enteredName, setEnteredName] = useState('');
// const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
// const [enteredNameTouched, setEnteredNameTouched] = useState(false);

// useEffect(() => {
//   if (enteredNameIsValid) {
//     console.log('Name Input is Valid!');
//   }
// }, [enteredNameIsValid]);

// const nameInputchangeHandler = (event) => {
//   setEnteredName(event.target.value);

//   if (event.target.value.trim() !== '') {
//     setEnteredNameIsValid(true);
//   }
// };

// const nameInputBlurHandler = (event) => {
//   setEnteredNameTouched(true);

//   if (enteredName.trim() === '') {
//     setEnteredNameIsValid(false);
//   }
// };

// const formSubmissionHandler = (event) => {
//   event.preventDefault();

//   setEnteredNameTouched(true);

//   if (enteredName.trim() === '') {
//     //trim removes excess whitespace
//     setEnteredNameIsValid(false);
//     return;
//   }
//   setEnteredNameIsValid(true);

//   console.log(enteredName);

//   // const enteredValue = nameInputRef.current.value;
//   // console.log(enteredValue);

//   setEnteredName(''); // for useState - clean way

//   // nameInputRef.current.value(''); // not cool to directly manipulate the DOM
// };

// const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

// const nameInputClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-control';
