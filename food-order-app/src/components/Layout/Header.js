import { Fragment } from 'react';
import styles from '../../assets/Header.module.css';
import mealsImage from '../../assets/meals.jpg';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
	return (
		<Fragment>
			<header className={styles.header}>
				<h1>FoodIsGood</h1>
				<HeaderCartButton />
			</header>
			<div className={styles['main-image']}>
				<img src={mealsImage} alt='A table fool of food' />
			</div>
		</Fragment>
	);
};

export default Header;
