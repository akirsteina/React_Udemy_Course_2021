import { useState } from 'react';

const SimpleInput = (props) => {
	// const nameInputRef = useRef();
	const [enteredName, setEnteredName] = useState('');
	const [enteredNameTouched, setEnteredNameTouched] = useState(false);
	const [enteredEmail, setEnteredEmail] = useState('');
	const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

	const enteredNameIsValid = enteredName.trim() !== '';
	const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

	const enteredEmailIsValid = enteredEmail.includes('@');
	const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

	let formIsValid = false;
	if (enteredNameIsValid && enteredEmailIsValid) {
		formIsValid = true;
	}

	const nameInputchangeHandler = (event) => {
		setEnteredName(event.target.value);
	};
	const emailInputchangeHandler = (event) => {
		setEnteredEmail(event.target.value);
	};

	const nameInputBlurHandler = () => {
		setEnteredNameTouched(true);
	};
	const emailInputBlurHandler = () => {
		setEnteredEmailTouched(true);
	};

	const formSubmissionHandler = (event) => {
		event.preventDefault();
		setEnteredNameTouched(true);
		setEnteredEmailTouched(true);
		if (!enteredNameIsValid || !enteredEmailIsValid) {
			return;
		}
		console.log(enteredName);
		console.log(enteredEmail);
		setEnteredName('');
		setEnteredEmail('');
		setEnteredNameTouched(false);
		setEnteredEmailTouched(false);
	};

	const nameInputClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-control';
	const emailInputClasses = emailInputIsInvalid ? 'form-control invalid' : 'form-control';

	// ref={nameInputRef}
	return (
		<form onSubmit={formSubmissionHandler}>
			<div className={nameInputClasses}>
				<label htmlFor='name'>Your Name</label>
				<input type='text' id='name' onChange={nameInputchangeHandler} onBlur={nameInputBlurHandler} value={enteredName} />
				{nameInputIsInvalid && <p className='error-text'>Name must not be empty!</p>}
			</div>
			<div className={emailInputClasses}>
				<label htmlFor='email'>Your Email</label>
				<input type='email' id='email' onChange={emailInputchangeHandler} onBlur={emailInputBlurHandler} value={enteredEmail} />
				{emailInputIsInvalid && <p className='error-text'>Enter a valid email!</p>}
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
