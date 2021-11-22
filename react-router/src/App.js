import { Route, BrowserRouter as Router } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Products from './pages/Products';
import MainHeader from './components/MainHeader';

function App() {
	return (
		<Router>
			<MainHeader />
			<main>
				<Route path='/welcome'>
					<Welcome />
				</Route>
				<Route path='/products'>
					<Products />
				</Route>
			</main>
		</Router>
	);
}

export default App;
