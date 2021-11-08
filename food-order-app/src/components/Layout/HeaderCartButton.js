import { useContext } from 'react';
import CartContext from '../../store/cart-context';

import CartIcon from '../Cart/CartIcon';
import styles from '../../assets/HeaderCartButton.module.css';

const HeaderCartButton = (props) => {
	const cartCtx = useContext(CartContext);

	// to add items (not amount of each item)
	const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
		return curNumber + item.amount;
	}, 0);

	return (
		<button className={styles.button} onClick={props.onClick}>
			<span className={styles.icon}>
				<CartIcon />
			</span>
			<span>Your cart</span>
			<span className={styles.badge}>{numberOfCartItems}</span>
		</button>
	);
};

export default HeaderCartButton;
