import { createSlice } from '@reduxjs/toolkit';

const initialCartState = { items: [], totalQuantity: 0 };

const cartSlice = createSlice({
	name: 'cart',
	initialState: initialCartState,
	reducers: {
		addProduct(state, action) {
			const newItem = action.payload;
			const existingItem = state.items.find((item) => item.id === newItem.id);
			state.totalQuantity++;
			if (!existingItem) {
				state.items.push({
					id: newItem.id,
					price: newItem.price,
					title: newItem.title,
					quantity: 1,
					totalPrice: newItem.price,
				});
			} else {
				existingItem.quantity++;
				existingItem.totalPrice = existingItem.totalPrice + newItem.price;
			}
		},
		removeProduct(state, action) {
			const id = action.payload;
			const existingItem = state.items.find((item) => item.id === id);
			state.totalQuantity--;
			if (existingItem.quantity === 1) {
				state.items = state.items.filter((item) => item.id !== id);
			} else {
				existingItem.quantity--;
				existingItem.price = existingItem.totalPrice - existingItem.price;
			}
		},
	},
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
