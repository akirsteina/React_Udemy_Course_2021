import { useParams } from 'react-router-dom';
import { Fragment } from 'react';

const ProductDetail = () => {
	const params = useParams();

	return (
		<Fragment>
			<h1>Product detail</h1>
			<h2>{params.productId}</h2>
		</Fragment>
	);
};

export default ProductDetail;
