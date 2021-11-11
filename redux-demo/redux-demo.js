const redux = require('redux'); //nodeJS importing 3rd party packages

// for the first time default value should be added
// second time it will not be read, but the new state
const counterReducer = (state = { counter: 0 }, action) => {
	if (action.type === 'increment') {
		return {
			counter: state.counter + 1,
		};
	}
	if (action.type === 'decrement') {
		return {
			counter: state.counter + -1,
		};
	}

	return state;
};

const store = redux.createStore(counterReducer);

//subscription
const counterSubscriber = () => {
	const latestState = store.getState();
	console.log(latestState);
};

store.subscribe(counterSubscriber);

// create and dispatch an action (js object with type that acts as identifier)
store.dispatch({ type: 'increment' });
store.dispatch({ type: 'decrement' });
