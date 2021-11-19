import { Fragment } from 'react';
import { useSelector } from 'react-redux';

import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {
	const productsInCart = useSelector((state) => state.cart.items);

	const totalProductsInCart = useSelector((state) => state.cart.totalQuantity);

	const cartContent = totalProductsInCart ? (
		<Fragment>
			<h2>Your Shopping Cart</h2>
			<ul>
				{productsInCart.map((product) => (
					<CartItem
						key={product.id}
						item={{
							title: product.title,
							quantity: product.quantity,
							total: product.totalPrice,
							price: product.price,
							id: product.id,
						}}
					/>
				))}
			</ul>
		</Fragment>
	) : (
		<h2>Your cart is empty :(</h2>
	);

	return <Card className={classes.cart}>{cartContent}</Card>;
};

export default Cart;
