import QuoteForm from '../components/quotes/QuoteForm';

const AddNewQuote = () => {
	const addQuoteHandler = (quoteData) => {
		console.log(quoteData);
	};
	return <QuoteForm onAddQuote={addQuoteHandler} />;
};

export default AddNewQuote;
