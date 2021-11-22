import { Fragment } from 'react';
import { useEffect } from 'react';
import { useParams, Route, Link, useRouteMatch } from 'react-router-dom';
import useHttp from '../hooks/use-http';
import { getSingleQuote } from '../lib/api';

import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';
import LoadingSpinner from '../components/UI/LoadingSpinner';

// const DUMMY_DATA = [
// 	{ id: 'q1', author: 'Anna', text: 'All is well!' },
// 	{ id: 'q2', author: 'Janis', text: 'Not all those who wander are lost' },
// 	{ id: 'q3', author: 'Marta', text: 'Always' },
// ];

const QuoteDetail = () => {
	const params = useParams();
	const match = useRouteMatch();

	const { quoteId } = params;

	const {
		sendRequest,
		status,
		data: loadedquote,
		error,
	} = useHttp(getSingleQuote, true);

	useEffect(() => {
		sendRequest(quoteId);
	}, [sendRequest, quoteId]);

	if (status === 'pending') {
		return (
			<div className='centered'>
				<LoadingSpinner />
			</div>
		);
	}

	if (error) {
		return <p className='centered'>{error}</p>;
	}

	// const quote = loadedquote.find((quote) => quote.id === params.quoteId);

	if (!loadedquote.text) {
		return <div>No quote found!</div>;
	}

	return (
		<Fragment>
			<HighlightedQuote text={loadedquote.text} author={loadedquote.author} />
			<Route exact path={match.path}>
				<div className='centered'>
					<Link className='btn--flat' to={`${match.url}/comments`}>
						Load comments
					</Link>
				</div>
			</Route>
			<Route path={`${match.path}/comments`}>
				<Comments />
			</Route>
		</Fragment>
	);
};

export default QuoteDetail;
