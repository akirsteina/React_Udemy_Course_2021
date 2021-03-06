import { useState, useRef, useContext } from 'react';
import AuthContext from '../../store/auth-context';
import { useHistory } from 'react-router-dom';

import classes from './AuthForm.module.css';

const API_KEY = process.env.REACT_APP_API_KEY;

const AuthForm = () => {
	const [isLogin, setIsLogin] = useState(true);
	const [isLoading, setIsLoading] = useState(false);
	const emailInputRef = useRef();
	const passwordInputRef = useRef();
	const history = useHistory();

	const authCtx = useContext(AuthContext);

	const switchAuthModeHandler = () => {
		setIsLogin((prevState) => !prevState);
	};

	const submitHandler = (event) => {
		event.preventDefault();
		const enteredEmail = emailInputRef.current.value;
		const enteredPassword = passwordInputRef.current.value;

		// optional - add validation
		setIsLoading(true);
		let url;
		if (isLogin) {
			url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`;
		}
		// signup authentification
		else {
			url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`;
		}
		fetch(url, {
			method: 'POST',
			body: JSON.stringify({
				email: enteredEmail,
				password: enteredPassword,
				returnSecureToken: true,
			}),
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then((res) => {
				setIsLoading(false);

				if (res.ok) {
					return res.json();
				} else {
					return res.json().then((data) => {
						let errorMessage = 'Authentication failed!';
						if (data && data.error && data.error.message) {
							errorMessage = data.error.message;
						}
						throw new Error(errorMessage);
					});
				}
			})

			.then((data) => {
				// current time in milliseconds + expiresIn in milliseconds
				// expirationTime is a date object
				const expirationTime = new Date(
					new Date().getTime() + +data.expiresIn * 1000
				);
				// console.log(data);
				authCtx.login(data.idToken, expirationTime.toISOString());
				history.replace('/');
			})
			.catch((err) => {
				alert(err.message);
			});
	};

	return (
		<section className={classes.auth}>
			<h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
			<form onSubmit={submitHandler}>
				<div className={classes.control}>
					<label htmlFor='email'>Your Email</label>
					<input type='email' id='email' required ref={emailInputRef} />
				</div>
				<div className={classes.control}>
					<label htmlFor='password'>Your Password</label>
					<input
						type='password'
						id='password'
						required
						ref={passwordInputRef}
					/>
				</div>
				<div className={classes.actions}>
					{!isLoading ? (
						<button>{isLogin ? 'Login' : 'Create Account'}</button>
					) : (
						<p>Sending request...</p>
					)}
					<button
						type='button'
						className={classes.toggle}
						onClick={switchAuthModeHandler}
					>
						{isLogin ? 'Create new account' : 'Login with existing account'}
					</button>
				</div>
			</form>
		</section>
	);
};

export default AuthForm;
