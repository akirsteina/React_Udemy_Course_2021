import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../../store/ui-slice';

import classes from './CartButton.module.css';

const CartButton = (props) => {
	const dispatch = useDispatch();
	const cartToggleHandler = () => {
		dispatch(uiActions.toggleCart());
	};
	const totalProductsInCart = useSelector((state) => state.cart.totalQuantity);

	return (
		<button className={classes.button} onClick={cartToggleHandler}>
			<span>My Cart</span>
			<span className={classes.badge}>{totalProductsInCart}</span>
		</button>
	);
};

export default CartButton;
