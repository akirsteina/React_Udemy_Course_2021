import { Fragment } from 'react';
import { useParams } from 'react-router';

const QuoteDetail = () => {
	const params = useParams();
	return (
		<Fragment>
			<h1>Product details</h1>
			<p>{params.productId}</p>
		</Fragment>
	);
};

export default QuoteDetail;
