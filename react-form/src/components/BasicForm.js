import useInput from '../hooks/use-input';

const isNotEmpty = (value) => value.trim() !== '';
const isEmail = (value) => value.includes('@');

const BasicForm = (props) => {
	const {
		value: firstNameEntered,
		isValid: firstNameIsValid,
		hasError: firstNameHasError,
		valueChangeHandler: firstNameChangeHandler,
		inputBlurHandler: firstNameBlurHandler,
		reset: firstNameResetHandler,
	} = useInput(isNotEmpty);
	const {
		value: lastNameEntered,
		isValid: lastNameIsValid,
		hasError: lastNameHasError,
		valueChangeHandler: lastNameChangeHandler,
		inputBlurHandler: lastNameBlurHandler,
		reset: lastNameResetHandler,
	} = useInput(isNotEmpty);
	const {
		value: emailEntered,
		isValid: emailIsValid,
		hasError: emailHasError,
		valueChangeHandler: emailChangeHandler,
		inputBlurHandler: emailBlurHandler,
		reset: emailResetHandler,
	} = useInput(isEmail);

	let formIsValid = false;
	if (firstNameIsValid && lastNameIsValid && emailIsValid) {
		formIsValid = true;
	}

	const formSubmitHandler = (event) => {
		event.preventDefault();
		if (!formIsValid) {
			return;
		}
		console.log('submitted!');
		console.log(firstNameEntered, lastNameEntered, emailEntered);
		firstNameResetHandler();
		lastNameResetHandler();
		emailResetHandler();
	};

	const firstNameClassnames = firstNameHasError ? 'form-control invalid' : 'form-control';
	const lastNameClassnames = lastNameHasError ? 'form-control invalid' : 'form-control';
	const emailClassnames = emailHasError ? 'form-control invalid' : 'form-control';

	return (
		<form onSubmit={formSubmitHandler}>
			<div className='control-group'>
				<div className={firstNameClassnames}>
					<label htmlFor='name'>First Name</label>
					<input type='text' id='name' onChange={firstNameChangeHandler} onBlur={firstNameBlurHandler} value={firstNameEntered} />
					{firstNameHasError && <p className='error-text'>First name is required!</p>}
				</div>
				<div className={lastNameClassnames}>
					<label htmlFor='lastName'>Last Name</label>
					<input type='text' id='lastName' onChange={lastNameChangeHandler} onBlur={lastNameBlurHandler} value={lastNameEntered} />
					{lastNameHasError && <p className='error-text'>Last name is required!</p>}
				</div>
			</div>
			<div className={emailClassnames}>
				<label htmlFor='email'>E-Mail Address</label>
				<input type='email' id='email' onChange={emailChangeHandler} onBlur={emailBlurHandler} value={emailEntered} />
				{emailHasError && <p className='error-text'>Please enter a valid email!</p>}
			</div>
			<div className='form-actions'>
				<button disabled={!formIsValid}>Submit</button>
			</div>
		</form>
	);
};

export default BasicForm;
