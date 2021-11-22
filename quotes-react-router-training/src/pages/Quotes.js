import { Fragment } from 'react/cjs/react.production.min';
import QuoteList from '../components/quotes/QuoteList';

const DUMMY_DATA = [
	{ id: 'q1', author: 'Anna', text: 'All is well!' },
	{ id: 'q2', author: 'Janis', text: 'Not all those who wander are lost' },
	{ id: 'q3', author: 'Marta', text: 'Always' },
];

const Quotes = () => {
	return (
		<Fragment>
			<h1>All quotes</h1>
			<QuoteList quotes={DUMMY_DATA} />
		</Fragment>
	);
};

export default Quotes;
