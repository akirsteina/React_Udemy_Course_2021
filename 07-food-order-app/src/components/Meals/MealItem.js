import { useContext } from 'react';

import MealItemForm from './MealItemForm';
import CartContext from '../../store/cart-context';

import styles from '../../assets/MealItem.module.css';

const MealItem = (props) => {
	const cartCtx = useContext(CartContext);

	const price = `$${props.price.toFixed(2)}`;

	const addToCartHandler = (amount) => {
		cartCtx.addItem({
			id: props.id,
			name: props.name,
			amount: amount,
			price: props.price,
		});
	};

	return (
		<li className={styles.meal}>
			<div>
				<h3>{props.name}</h3>
				<p className={styles.description}>{props.description}</p>
				<div className={styles.price}>{price}</div>
			</div>
			<div>
				<MealItemForm id={props.id} onAddToCart={addToCartHandler} />
			</div>
		</li>
	);
};

export default MealItem;
