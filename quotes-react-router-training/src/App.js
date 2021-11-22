import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
} from 'react-router-dom';
import MainHeader from './components/layout/MainHeader';
import Quotes from './pages/Quotes';
import QuoteDetail from './pages/QuoteDetail';
import AddNewQuote from './pages/AddNewQuote';

function App() {
	return (
		<Router>
			<MainHeader />
			<Switch>
				<Route exact path='/'>
					<Redirect to='/quotes' />
				</Route>
				<Route exact path='/quotes'>
					<Quotes />
				</Route>
				<Route path='/quotes/:quoteId'>
					<QuoteDetail />
				</Route>
				<Route path='/new-quote'>
					<AddNewQuote />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
