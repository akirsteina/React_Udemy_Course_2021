import useInput from '../hooks/use-input';

const SimpleInput = (props) => {
	const {
		value: enteredName,
		isValid: enteredNameIsValid,
		hasError: nameInputHasError,
		valueChangeHandler: nameChangeHandler,
		inputBlurHandler: nameBlurHandler,
		reset: resetNameInput,
	} = useInput((value) => value.trim() !== '');

	const {
		value: enteredEmail,
		isValid: enteredEmailIsValid,
		hasError: emailInputHasError,
		valueChangeHandler: emailChangeHandler,
		inputBlurHandler: emailBlurHandler,
		reset: resetEmailInput,
	} = useInput((value) => value.includes('@'));

	let formIsValid = false;
	if (enteredNameIsValid && enteredEmailIsValid) {
		formIsValid = true;
	}

	const formSubmissionHandler = (event) => {
		event.preventDefault();
		if (!enteredNameIsValid || !enteredEmailIsValid) {
			return;
		}
		console.log(enteredName);
		console.log(enteredEmail);
		resetNameInput();
		resetEmailInput();
	};

	const nameInputClasses = nameInputHasError ? 'form-control invalid' : 'form-control';
	const emailInputClasses = emailInputHasError ? 'form-control invalid' : 'form-control';

	// ref={nameInputRef}
	return (
		<form onSubmit={formSubmissionHandler}>
			<div className={nameInputClasses}>
				<label htmlFor='name'>Your Name</label>
				<input type='text' id='name' onChange={nameChangeHandler} onBlur={nameBlurHandler} value={enteredName} />
				{nameInputHasError && <p className='error-text'>Name must not be empty!</p>}
			</div>
			<div className={emailInputClasses}>
				<label htmlFor='email'>Your Email</label>
				<input type='email' id='email' onChange={emailChangeHandler} onBlur={emailBlurHandler} value={enteredEmail} />
				{emailInputHasError && <p className='error-text'>Enter a valid email!</p>}
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
