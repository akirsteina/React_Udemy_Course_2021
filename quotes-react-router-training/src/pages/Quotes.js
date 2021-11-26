import { useEffect } from 'react';

import useHttp from '../hooks/use-http';
import { getAllQuotes } from '../lib/api';

import QuoteList from '../components/quotes/QuoteList';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import NoQuotesFound from '../components/quotes/NoQuotesFound';

// const DUMMY_DATA = [
// 	{ id: 'q1', author: 'Anna', text: 'All is well!' },
// 	{ id: 'q2', author: 'Janis', text: 'Not all those who wander are lost' },
// 	{ id: 'q3', author: 'Marta', text: 'Always' },
// ];

const Quotes = () => {
	const {
		sendRequest,
		status,
		data: loadedQuotes,
		error,
	} = useHttp(getAllQuotes, true);

	useEffect(() => {
		sendRequest();
	}, [sendRequest]);

	if (status === 'pending') {
		return (
			<div className='centered'>
				<LoadingSpinner />
			</div>
		);
	}

	if (error) {
		return <div className='centered focused'>{error}</div>;
	}

	if (status === 'completed' && (!loadedQuotes || loadedQuotes.length === 0)) {
		return <NoQuotesFound />;
	}

	return <QuoteList quotes={loadedQuotes} />;
};

export default Quotes;
