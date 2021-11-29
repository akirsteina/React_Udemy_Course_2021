import React, { Suspense } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
} from 'react-router-dom';
import Layout from './components/layout/Layout';
import Quotes from './pages/Quotes';
// import QuoteDetail from './pages/QuoteDetail';
// import AddNewQuote from './pages/AddNewQuote';
// import NotFound from './pages/NotFound';
import LoadingSpinner from './components/UI/LoadingSpinner';

const AddNewQuote = React.lazy(() => import('./pages/AddNewQuote'));
const QuoteDetail = React.lazy(() => import('./pages/QuoteDetail'));
const NotFound = React.lazy(() => import('./pages/NotFound'));

function App() {
	return (
		<Router>
			<Layout>
				<Suspense
					fallback={
						<div className='centered'>
							<LoadingSpinner />
						</div>
					}
				>
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
						<Route path='*'>
							<NotFound />
						</Route>
					</Switch>
				</Suspense>
			</Layout>
		</Router>
	);
}

export default App;
