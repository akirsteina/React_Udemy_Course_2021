import Modal from '../UI/Modal';

import styles from '../../assets/Cart.module.css';
import { useState } from 'react';
import { Fragment } from 'react';

const Cart = (props) => {
	const [modalOpen, setModalOpen] = useState(true);
	const closeModal = () => {
		setModalOpen(false);
	};

	const cartItems = (
		<ul className={styles['card-items']}>
			{[{ id: 'c1', name: 'sushi', amount: 2, price: 12.99 }].map((cartItem) => (
				<li>{cartItem.name}</li>
			))}
		</ul>
	);
	return (
		<Fragment>
			{modalOpen && (
				<Modal onConfirm={closeModal}>
					{cartItems}
					<div className={styles.total}>
						<span>Total amount</span>
						<span>35.62</span>
					</div>
					<div className={styles.actions}>
						<button className={styles['button--alt']} onClick={closeModal}>
							Close
						</button>
						<button className={styles.button}>Order</button>
					</div>
				</Modal>
			)}
		</Fragment>
	);
};

export default Cart;
