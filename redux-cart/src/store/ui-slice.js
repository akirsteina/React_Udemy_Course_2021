import { createSlice } from '@reduxjs/toolkit';

const initialCartState = { showCart: false };

const uiSlice = createSlice({
	name: 'ui',
	initialState: initialCartState,
	reducers: {
		toggleCart(state) {
			state.showCart = !state.showCart;
		},
	},
});

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;
