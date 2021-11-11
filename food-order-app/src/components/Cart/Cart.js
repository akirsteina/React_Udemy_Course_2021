import React, { useContext, useState } from 'react';

import Modal from '../UI/Modal';
import CartItem from './CartItem';
import CartContext from '../../store/cart-context';
import CheckOut from './Checkout';

import styles from '../../assets/Cart.module.css';

const Cart = (props) => {
	const cartCtx = useContext(CartContext);
	const [isCheckout, setIsCheckout] = useState(false);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [didSubmit, setDidSubmit] = useState(false);
	const [error, setError] = useState(null);

	const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
	const hasItems = cartCtx.items.length > 0;

	const cartItemRemoveHandler = (id) => {
		cartCtx.removeItem(id);
	};

	const cartItemAddHandler = (item) => {
		cartCtx.addItem({ ...item, amount: 1 });
	};

	const orderHandler = () => {
		setIsCheckout(true);
	};

	const addOrderHandler = async (userData) => {
		setIsSubmitting(true);
		setError(null);
		try {
			const response = await fetch('https://react-http-25c2a-default-rtdb.europe-west1.firebasedatabase.app/orders.json', {
				method: 'POST',
				body: JSON.stringify({
					user: userData,
					order: cartCtx.items,
				}),
				headers: {
					'Content-Type': 'application/json',
				},
			});

			if (!response.ok) {
				throw new Error('Something went wrong!');
			}

			await response.json();
		} catch (error) {
			setError(error.message);
		}
		setIsSubmitting(false);
		setDidSubmit(true);
		cartCtx.clearCart();
	};

	const cartItems = (
		<ul className={styles['cart-items']}>
			{cartCtx.items.map((item) => (
				<CartItem
					key={item.id}
					name={item.name}
					amount={item.amount}
					price={item.price}
					onRemove={cartItemRemoveHandler.bind(null, item.id)}
					onAdd={cartItemAddHandler.bind(null, item)}
				></CartItem>
			))}
		</ul>
	);

	const modalActions = (
		<div className={styles.actions}>
			<button className={styles['button--alt']} onClick={props.onHideCart}>
				Close
			</button>
			{hasItems && (
				<button className={styles.button} onClick={orderHandler}>
					Order
				</button>
			)}
		</div>
	);

	const cartModalContent = (
		<React.Fragment>
			{cartItems}
			<div className={styles.total}>
				<span>Total amount</span>
				<span>{totalAmount}</span>
			</div>
			{isCheckout && <CheckOut onConfirm={addOrderHandler} onCancel={props.onHideCart} />}
			{!isCheckout && modalActions}
			{error && <p>{error}</p>}
		</React.Fragment>
	);

	const isSubmittingModalContent = <p>Sending order data...</p>;
	const didSubmitModalContent = (
		<React.Fragment>
			<p>Your order was successful!</p>
			<div className={styles.actions}>
				<button className={styles['button--alt']} onClick={props.onHideCart}>
					Okay
				</button>
			</div>
		</React.Fragment>
	);

	return (
		<Modal onClose={props.onHideCart}>
			{isSubmitting && isSubmittingModalContent}
			{error && <p>{error}</p>}
			{!isSubmitting && !didSubmit && !error && cartModalContent}
			{!isSubmitting && didSubmit && !error && didSubmitModalContent}
		</Modal>
	);
};

export default Cart;
