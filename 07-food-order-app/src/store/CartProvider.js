import { useReducer } from 'react';
// same as useState, but for more complex use cases

import CartContext from './cart-context';

const defaultCartState = {
	items: [],
	totalAmount: 0,
};

const cartReducer = (state, action) => {
	if (action.type === 'ADD_CART_ITEM') {
		const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;

		const existingCartItemIndex = state.items.findIndex((item) => item.id === action.item.id);

		const existingCartItem = state.items[existingCartItemIndex];

		let updatedItems;
		if (existingCartItem) {
			const updatedItem = {
				...existingCartItem,
				amount: existingCartItem.amount + action.item.amount,
			};
			updatedItems = [...state.items];
			updatedItems[existingCartItemIndex] = updatedItem;
		} else {
			updatedItems = state.items.concat(action.item); // like push, but creates new array
		}

		return {
			items: updatedItems,
			totalAmount: updatedTotalAmount,
		};
	}

	if (action.type === 'REMOVE_CART_ITEM') {
		const existingCartItemIndex = state.items.findIndex((item) => item.id === action.id);
		const existingCartItem = state.items[existingCartItemIndex];
		const updatedTotalAmount = state.totalAmount - existingCartItem.price;
		let updatedItems;
		if (existingCartItem.amount === 1) {
			updatedItems = state.items.filter((item) => item.id !== action.id);
		} else {
			const updatedItem = { ...existingCartItem, amount: existingCartItem.amount - 1 };
			updatedItems = [...state.items];
			updatedItems[existingCartItemIndex] = updatedItem;
		}
		return {
			items: updatedItems,
			totalAmount: updatedTotalAmount,
		};
	}

	if (action.type === 'CLEAR') {
		return defaultCartState;
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

	const clearCartHandler = () => {
		dispatchCartAction({
			type: 'CLEAR',
		});
	};

	// dynamic, will change
	const cartContext = {
		items: cartState.items,
		totalAmount: cartState.totalAmount,
		addItem: addItemToCartHandler,
		removeItem: removeItemFromCartHandler,
		clearCart: clearCartHandler,
	};

	return <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>;
};

export default CartProvider;