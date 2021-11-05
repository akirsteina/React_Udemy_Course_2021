import styles from '../../assets/MealItem.module.css';
import MealItemForm from './MealItemForm';

const MealItem = (props) => {
	const price = `$${props.price.toFixed(2)}`;
	return (
		<li className={styles.meal}>
			<div>
				<h3>{props.name}</h3>
				<p className={styles.description}>{props.description}</p>
				<div className={styles.price}>{price}</div>
			</div>
			<div>
				<MealItemForm id={props.id} />
			</div>
		</li>
	);
};

export default MealItem;
