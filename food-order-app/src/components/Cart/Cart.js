import Modal from '../UI/Modal';

import styles from '../../assets/Cart.module.css';

const Cart = (props) => {
	const cartItems = (
		<ul className={styles['card-items']}>
			{[{ id: 'c1', name: 'sushi', amount: 2, price: 12.99 }].map((cartItem) => (
				<li>{cartItem.name}</li>
			))}
		</ul>
	);

	return (
		<Modal onClose={props.onHideCart}>
			{cartItems}
			<div className={styles.total}>
				<span>Total amount</span>
				<span>35.62</span>
			</div>
			<div className={styles.actions}>
				<button className={styles['button--alt']} onClick={props.onHideCart}>
					Close
				</button>
				<button className={styles.button}>Order</button>
			</div>
		</Modal>
	);
};

export default Cart;
