import React, { useState, useEffect, useCallback } from 'react';

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

const retrieveStoredToken = () => {
	const storedToken = localStorage.getItem('token');
	const storedExpirationDate = localStorage.getItem('expirationTime');
	const remainingTime = calculcateRemainingTime(storedExpirationDate);
	if (remainingTime <= 60000) {
		localStorage.removeItem('token');
		localStorage.removeItem('expirationTime');
		return null;
	}

	return { token: storedToken, duration: remainingTime };
};

export const AuthContextProvider = (props) => {
	const tokenData = retrieveStoredToken();
	// const initialToken = localStorage.getItem('token');
	let initialToken;
	if (tokenData) {
		//only truthy if we have a token, otherwise null
		initialToken = tokenData.token;
	}
	const [token, setToken] = useState(initialToken);

	// !! converts to a boolean value, e.g., string is true
	const userIsLoggedIn = !!token;

	// add useCallback as it is a dependency of useEffect
	// to prevent infinite loops
	const logoutHandler = useCallback(() => {
		setToken(null);
		localStorage.removeItem('token');
		localStorage.removeItem('expirationTime');
		if (logoutTimer) {
			clearTimeout(logoutTimer);
		}
	}, []);

	const loginHandler = (token, expirationTime) => {
		setToken(token);
		localStorage.setItem('token', token); // store the token for using again when reloading the page
		localStorage.setItem('expirationTime', expirationTime); // has to be string // set every time on login

		const remainingTime = calculcateRemainingTime(expirationTime);

		logoutTimer = setTimeout(logoutHandler, remainingTime); // logoutHandler is executed when the timer expires (remaining time in milliseconds)
	};

	useEffect(() => {
		// sets the logout handler to the remaining time if we automatically logged in the user (on page refresh)
		if (tokenData) {
			console.log(tokenData.duration);
			logoutTimer = setTimeout(logoutHandler, tokenData.duration);
		}
	}, [tokenData, logoutHandler]);

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
