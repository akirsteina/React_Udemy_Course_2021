import { Switch, Route } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from './store/auth-context';
import Layout from './components/Layout/Layout';
import UserProfile from './components/Profile/UserProfile';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';

function App() {
	const authCtx = useContext(AuthContext);
	return (
		<Layout>
			<Switch>
				<Route path='/' exact>
					<HomePage />
				</Route>
				<Route path='/auth'>
					<AuthPage />
				</Route>
				{authCtx.isLoggedIn && (
					<Route path='/profile'>
						<UserProfile />
					</Route>
				)}
			</Switch>
		</Layout>
	);
}

export default App;
