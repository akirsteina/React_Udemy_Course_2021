import { useHistory } from 'react-router';

import QuoteForm from '../components/quotes/QuoteForm';

const AddNewQuote = () => {
	const history = useHistory();

	const addQuoteHandler = (quoteData) => {
		console.log(quoteData);
		history.push('/quotes');
	};
	return <QuoteForm onAddQuote={addQuoteHandler} />;
};

export default AddNewQuote;
