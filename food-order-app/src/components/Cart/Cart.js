import { useContext } from 'react';

import Modal from '../UI/Modal';
import CartContext from '../../store/cart-context';

import styles from '../../assets/Cart.module.css';

const Cart = (props) => {
	const cartCtx = useContext(CartContext);

	const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
	const hasItems = cartCtx.items.length > 0;

	const cartItems = (
		<ul className={styles['card-items']}>
			{cartCtx.items.map((cartItem) => (
				<li>{cartItem.name}</li>
			))}
		</ul>
	);

	return (
		<Modal onClose={props.onHideCart}>
			{cartItems}
			<div className={styles.total}>
				<span>Total amount</span>
				<span>{totalAmount}</span>
			</div>
			<div className={styles.actions}>
				<button className={styles['button--alt']} onClick={props.onHideCart}>
					Close
				</button>
				{hasItems && <button className={styles.button}>Order</button>}
			</div>
		</Modal>
	);
};

export default Cart;
