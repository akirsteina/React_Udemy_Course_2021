import { useReducer } from 'react';
// same as useState, but for more complex use cases

import CartContext from './cart-context';

const defaultCartState = {
	items: [],
	totalAmount: 0,
};

const cartReducer = (state, action) => {
	if (action === 'ADD_CART_ITEM') {
		const updatedItems = state.items.concat(action.item); // like push, but creates new array
		const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
		return {
			items: updatedItems,
			totalAmount: updatedTotalAmount,
		};
	}
	if (action === 'REMOVE_CART_ITEM') {
	}
	return defaultCartState; //returns a new state snapshot
};

const CartProvider = (props) => {
	// first element - state snapshot
	// second element - function that allows to dispatch an action to reducer
	const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

	const addItemToCartHandler = (item) => {
		dispatchCartAction({
			type: 'ADD_CART_ITEM',
			item: item,
		});
	};
	const removeItemFromCartHandler = (id) => {
		dispatchCartAction({
			type: 'REMOVE_CART_ITEM',
			id: id,
		});
	};

	// dynamic, will change
	const cartContext = {
		items: cartState.items,
		totalAmount: cartState.totalAmount,
		addItem: addItemToCartHandler,
		removeItem: removeItemFromCartHandler,
	};

	return <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>;
};

export default CartProvider;
