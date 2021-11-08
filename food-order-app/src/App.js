import { useState, Fragment } from 'react';
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';

function App() {
	const [cartIsShown, setCartIsShown] = useState(false);

	const hideCartHandler = () => {
		setCartIsShown(false);
	};

	const showCartHandler = () => {
		setCartIsShown(true);
	};

	return (
		<Fragment>
			{cartIsShown && <Cart onHideCart={hideCartHandler} />}

			<Header onShowCart={showCartHandler} />
			<main>
				<Meals />
			</main>
		</Fragment>
	);
}

export default App;
