import { useReducer } from 'react';
import CartContext from './cart-context';

const CartProvider = (props) => {
	const addItemToCartHandler = (item) => {};
	const removeItemFromCartHandler = (id) => {};

	// dynamic, will change
	const cartContext = {
		items: [],
		totalAmount: 0,
		addItem: addItemToCartHandler,
		removeItem: removeItemFromCartHandler,
	};

	return <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>;
};

export default CartProvider;
