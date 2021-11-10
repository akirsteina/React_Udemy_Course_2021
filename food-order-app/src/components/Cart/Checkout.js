import styles from '../../assets/Checkout.module.css';

const CheckOut = (props) => {
	const checkoutSubmitHandler = (event) => {
		event.preventDefault();
	};

	return (
		<form onSubmit={checkoutSubmitHandler}>
			<div className={styles.control}>
				<label htmlFor='name'>Your name</label>
				<input type='text' id='name' />
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
			<button type='button' onClick={props.onCancel}>
				Cancel
			</button>
			<button type='submit'>Confirm</button>
		</form>
	);
};

export default CheckOut;
