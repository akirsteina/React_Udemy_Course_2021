import { Fragment } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { authActions } from './store/index';

import Counter from './components/Counter';
import Header from './components/Header';
import Auth from './components/Auth';
import UserProfile from './components/UserProfile';

const App = () => {
	const dispatch = useDispatch();
	const isAuth = useSelector((state) => state.auth.isAuthenticated);

	const loginHandler = () => {
		dispatch(authActions.login());
	};

	const logoutHandler = () => {
		dispatch(authActions.logout());
	};

	return (
		<Fragment>
			<Header logoutHandler={logoutHandler} />
			{isAuth ? <UserProfile /> : <Auth loginHandler={loginHandler} />}
			<Counter />
		</Fragment>
	);
};

export default App;
