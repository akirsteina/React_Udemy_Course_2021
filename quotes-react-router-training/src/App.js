import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
} from 'react-router-dom';
import Layout from './components/layout/Layout';
import Quotes from './pages/Quotes';
import QuoteDetail from './pages/QuoteDetail';
import AddNewQuote from './pages/AddNewQuote';

function App() {
	return (
		<Router>
			<Layout>
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
			</Layout>
		</Router>
	);
}

export default App;
