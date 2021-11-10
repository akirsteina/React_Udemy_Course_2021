import { useContext, useEffect, useState } from 'react';
import CartContext from '../../store/cart-context';

import CartIcon from '../Cart/CartIcon';
import styles from '../../assets/HeaderCartButton.module.css';

const HeaderCartButton = (props) => {
	const [buttonIsHighlighted, setButtonIsHighlited] = useState(false);

	const cartCtx = useContext(CartContext);

	const { items } = cartCtx;

	// to add items (not amount of each item)
	const numberOfCartItems = items.reduce((curNumber, item) => {
		return curNumber + item.amount;
	}, 0);

	useEffect(() => {
		if (cartCtx.items.length === 0) {
			return;
		}
		setButtonIsHighlited(true);

		const timer = setTimeout(() => {
			setButtonIsHighlited(false);
		}, 300);
		// automatically called as a cleanup function
		return () => {
			clearTimeout(timer);
		};
	}, [items, cartCtx.items.length]);

	const btnClasses = `${styles.button} ${buttonIsHighlighted ? styles.bump : ''}`;

	return (
		<button className={btnClasses} onClick={props.onClick}>
			<span className={styles.icon}>
				<CartIcon />
			</span>
			<span>Your cart</span>
			<span className={styles.badge}>{numberOfCartItems}</span>
		</button>
	);
};

export default HeaderCartButton;
