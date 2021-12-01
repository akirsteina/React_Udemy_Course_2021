import React, { useState } from 'react';

let logoutTimer;

const AuthContext = React.createContext({
	token: '',
	isLoggedIn: false,
	login: (token) => {},
	logout: () => {},
});

const calculcateRemainingTime = (expirationTime) => {
	const currentTime = new Date().getTime(); //current timestamp in milliseconds
	const adjExpirationTime = new Date(expirationTime).getTime(); //some time in the future
	const remainingDuration = adjExpirationTime - currentTime; // time in milliseconds
	return remainingDuration;
};

export const AuthContextProvider = (props) => {
	const initialToken = localStorage.getItem('token');
	const [token, setToken] = useState(initialToken);

	// !! converts to a boolean value, e.g., string is true
	const userIsLoggedIn = !!token;

	const logoutHandler = () => {
		setToken(null);
		localStorage.removeItem('token');
		if (logoutTimer) {
			clearTimeout(logoutTimer);
		}
	};

	const loginHandler = (token, expirationTime) => {
		setToken(token);
		localStorage.setItem('token', token);

		const remainingTime = calculcateRemainingTime(expirationTime);

		logoutTimer = setTimeout(logoutHandler, remainingTime); // logoutHandler is executed when the timer expires (remaining time in milliseconds)
	};

	const contextValue = {
		token,
		isLoggedIn: userIsLoggedIn,
		login: loginHandler,
		logout: logoutHandler,
	};
	return (
		<AuthContext.Provider value={contextValue}>
			{props.children}
		</AuthContext.Provider>
	);
};

export default AuthContext;
