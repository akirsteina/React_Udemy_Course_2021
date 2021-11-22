import { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
	return (
		<Fragment>
			<h1>The Products page!</h1>
			<ul>
				<li>
					<Link to='products/p1'>Product 1</Link>
				</li>
				<li>
					<Link to='products/p2'>Product 2</Link>
				</li>
				<li>
					<Link to='products/p3'>Product 3</Link>
				</li>
			</ul>
		</Fragment>
	);
};

export default Products;
