import { useState, useEffect, useCallback } from 'react';
import Card from '../UI/Card';
import MealItem from './MealItem';

import styles from '../../assets/AvailableMeals.module.css';

const AvailableMeals = () => {
	const [meals, setMeals] = useState([]);
	const [error, setError] = useState(null);
	const [isloading, setIsLoading] = useState(false);

	const fetchMealsHandler = async () => {
		setIsLoading(true);
		setError(null);

		try {
			const response = await fetch('https://react-http-25c2a-default-rtdb.europe-west1.firebasedatabase.app/meals.json');

			if (!response.ok) {
				throw new Error('Something went wrong!');
			}

			const mealsData = await response.json();

			const loadedMeals = [];

			for (const key in mealsData) {
				loadedMeals.push({
					id: mealsData[key].id,
					name: mealsData[key].name,
					description: mealsData[key].description,
					price: mealsData[key].price,
				});
			}
			setMeals(loadedMeals);
		} catch (error) {
			setError(error.message);
		}
		setIsLoading(false);
	};

	useEffect(() => {
		fetchMealsHandler();
	}, []);

	const mealsList = meals.map((meal) => <MealItem key={meal.id} id={meal.id} name={meal.name} description={meal.description} price={meal.price} />);

	let content = <p>No meals found</p>;
	if (meals.length > 0) {
		content = mealsList;
	}
	if (error) {
		content = <p>{error}</p>;
	}
	if (isloading) {
		content = <p>Loading...</p>;
	}

	return (
		<section className={styles.meals}>
			<Card>
				<ul>{content}</ul>
			</Card>
		</section>
	);
};

export default AvailableMeals;
