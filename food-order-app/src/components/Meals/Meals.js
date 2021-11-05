import { Fragment } from 'react';
import MealsSummary from './MealsSummary';
import AvailableMeals from './AvailableMeals';

const Meals = () => {
	return (
		<Fragment>
			<MealsSummary />
			<main>
				<AvailableMeals />
			</main>
		</Fragment>
	);
};

export default Meals;
