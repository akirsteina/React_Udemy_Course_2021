import useInput from '../../hooks/use-Input';

import styles from '../../assets/Checkout.module.css';

const containsValue = (value) => value.trim() !== '';

const CheckOut = (props) => {
	const {
		enteredValue: enteredName,
		enteredInputIsValid: enteredNameIsValid,
		hasError: nameInputHasError,
		enteredInputHandler: enteredNameHandler,
		inputBlurHandler: nameBlurHandler,
		resetInput: resetNameInput,
	} = useInput(containsValue);

	const {
		enteredValue: enteredStreet,
		enteredInputIsValid: enteredStreetIsValid,
		hasError: streetInputHasError,
		enteredInputHandler: enteredStreetHandler,
		inputBlurHandler: streetBlurHandler,
		resetInput: resetStreetInput,
	} = useInput(containsValue);

	const {
		enteredValue: enteredPostal,
		enteredInputIsValid: enteredPostalIsValid,
		hasError: postalInputHasError,
		enteredInputHandler: enteredPostalHandler,
		inputBlurHandler: postalBlurHandler,
		resetInput: resetPostalInput,
	} = useInput(containsValue);

	const {
		enteredValue: enteredCity,
		enteredInputIsValid: enteredCityIsValid,
		hasError: cityInputHasError,
		enteredInputHandler: enteredCityHandler,
		inputBlurHandler: cityBlurHandler,
		resetInput: resetCityInput,
	} = useInput(containsValue);

	let formIsValid = false;
	if (enteredNameIsValid && enteredStreetIsValid && enteredPostalIsValid && enteredCityIsValid) {
		formIsValid = true;
	}

	const checkoutSubmitHandler = (event) => {
		event.preventDefault();
		if (!formIsValid) {
			return;
		}
		console.log(enteredName, enteredStreet, enteredPostal, enteredCity);
		resetNameInput();
		resetStreetInput();
		resetPostalInput();
		resetCityInput();
	};

	const nameInputClasses = nameInputHasError ? `${styles.control} ${styles.invalid}` : `${styles.control}`;
	const streetInputClasses = streetInputHasError ? `${styles.control} ${styles.invalid}` : `${styles.control}`;
	const postalInputClasses = postalInputHasError ? `${styles.control} ${styles.invalid}` : `${styles.control}`;
	const cityInputClasses = cityInputHasError ? `${styles.control} ${styles.invalid}` : `${styles.control}`;

	return (
		<form onSubmit={checkoutSubmitHandler} className={styles.form}>
			<div className={nameInputClasses}>
				<label htmlFor='name'>Your name</label>
				<input type='text' id='name' onChange={enteredNameHandler} onBlur={nameBlurHandler} value={enteredName} />
				{nameInputHasError && <p className={styles.error}>Please enter your name!</p>}
			</div>
			<div className={streetInputClasses}>
				<label htmlFor='street'>Street</label>
				<input type='text' id='street' onChange={enteredStreetHandler} onBlur={streetBlurHandler} value={enteredStreet} />
				{streetInputHasError && <p className={styles.error}>Please enter street name!</p>}
			</div>
			<div className={postalInputClasses}>
				<label htmlFor='postal'>ZIP code</label>
				<input type='text' id='postal' onChange={enteredPostalHandler} onBlur={postalBlurHandler} value={enteredPostal} />
				{postalInputHasError && <p className={styles.error}>Please enter ZIP code!</p>}
			</div>
			<div className={cityInputClasses}>
				<label htmlFor='city'>City</label>
				<input type='text' id='city' onChange={enteredCityHandler} onBlur={cityBlurHandler} value={enteredCity} />
				{cityInputHasError && <p className={styles.error}>Please enter your city!</p>}
			</div>
			<div className={styles.actions}>
				<button type='button' onClick={props.onCancel}>
					Cancel
				</button>
				<button type='submit' className={styles.submit} disabled={!formIsValid}>
					Confirm
				</button>
			</div>
		</form>
	);
};

export default CheckOut;
