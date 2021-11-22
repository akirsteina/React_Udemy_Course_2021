import { Fragment } from 'react';
import { useParams, Route } from 'react-router';

import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';

const DUMMY_DATA = [
	{ id: 'q1', author: 'Anna', text: 'All is well!' },
	{ id: 'q2', author: 'Janis', text: 'Not all those who wander are lost' },
	{ id: 'q3', author: 'Marta', text: 'Always' },
];

const QuoteDetail = () => {
	const params = useParams();

	const quote = DUMMY_DATA.find((quote) => quote.id === params.quoteId);

	if (!quote) {
		return <div>No quote found!</div>;
	}

	return (
		<Fragment>
			<HighlightedQuote text={quote.text} author={quote.author} />
			<Route path={`/quotes/${params.quoteId}/comments`}>
				<Comments />
			</Route>
		</Fragment>
	);
};

export default QuoteDetail;
