import { useDispatch } from 'react-redux';
import { uiActions } from '../../store/ui-slice';

import classes from './CartButton.module.css';

const CartButton = (props) => {
	const dispatch = useDispatch();
	const cartToggleHandler = () => {
		dispatch(uiActions.toggleCart());
		console.log('cliccked');
	};

	return (
		<button className={classes.button} onClick={cartToggleHandler}>
			<span>My Cart</span>
			<span className={classes.badge}>1</span>
		</button>
	);
};

export default CartButton;
