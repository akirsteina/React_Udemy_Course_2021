import { useState } from 'react/cjs/react.development';
import styles from '../../assets/Checkout.module.css';

const CheckOut = (props) => {
	const [enteredName, setEnteredName] = useState('');
	const [nameInputIsValid, setNameInputIsValid] = useState(true);
	const [nameInputTouched, setNameInputTouched] = useState(false);
	// const [nameInputError, setNameInputError] = useState(null);

	// let formIsValid = false;
	// if (nameInputIsValid) {
	// 	formIsValid = true;
	// }

	const enteredNameHandler = (event) => {
		setEnteredName(event.target.value);
		if (event.target.value.trim() !== '') {
			setNameInputIsValid(true);
			return;
		}
	};

	const nameBlurHandler = () => {
		setNameInputTouched(true);
		if (enteredName.trim() === '') {
			setNameInputIsValid(false);
			return;
		}
	};

	const checkoutSubmitHandler = (event) => {
		event.preventDefault();

		setNameInputTouched(true);

		if (enteredName.trim() === '') {
			setNameInputIsValid(false);
			return;
		}
		setNameInputIsValid(true);
		console.log('Submitted: ', enteredName);

		setEnteredName('');
	};

	const nameInputIsInvalid = !nameInputIsValid && nameInputTouched;

	const nameInputClasses = nameInputIsInvalid ? `${styles.control} ${styles.invalid}` : `${styles.control}`;

	return (
		<form onSubmit={checkoutSubmitHandler}>
			<div className={nameInputClasses}>
				<label htmlFor='name'>Your name</label>
				<input type='text' id='name' onChange={enteredNameHandler} onBlur={nameBlurHandler} value={enteredName} />
				{nameInputIsInvalid && <p className={styles.error}>Please enter your name!</p>}
			</div>
			<div className={styles.control}>
				<label htmlFor='street'>Street</label>
				<input type='text' id='street' />
			</div>
			<div className={styles.control}>
				<label htmlFor='postal'>ZIP code</label>
				<input type='text' id='postal' />
			</div>
			<div className={styles.control}>
				<label htmlFor='city'>City</label>
				<input type='text' id='city' />
			</div>
			<div className={styles.actions}>
				<button type='button' onClick={props.onCancel}>
					Cancel
				</button>
				<button type='submit'>Confirm</button>
			</div>
		</form>
	);
};

export default CheckOut;
