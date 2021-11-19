import { useSelector, useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart-slice';
import { uiActions } from '../../store/ui-slice';

import classes from './CartItem.module.css';

const CartItem = (props) => {
	const dispatch = useDispatch();
	const totalProductsInCart = useSelector((state) => state.cart.totalQuantity);

	const addItem = () => {
		dispatch(cartActions.addProduct({ id, title, price }));
	};

	const removeItem = () => {
		if (totalProductsInCart === 1) {
			dispatch(uiActions.toggleCart());
		}
		dispatch(cartActions.removeProduct(id));
	};

	const { title, quantity, total, price, id } = props.item;

	return (
		<li className={classes.item}>
			<header>
				<h3>{title}</h3>
				<div className={classes.price}>
					${total.toFixed(2)}{' '}
					<span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
				</div>
			</header>
			<div className={classes.details}>
				<div className={classes.quantity}>
					x <span>{quantity}</span>
				</div>
				<div className={classes.actions}>
					<button onClick={removeItem}>-</button>
					<button onClick={addItem}>+</button>
				</div>
			</div>
		</li>
	);
};

export default CartItem;
