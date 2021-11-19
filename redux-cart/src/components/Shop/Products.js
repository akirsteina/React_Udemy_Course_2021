import ProductItem from './ProductItem';
import classes from './Products.module.css';

const products = [
	{
		title: 'Product 1',
		price: 6.66,
		description: 'This is a first product - amazing!',
		id: '01',
	},
	{
		title: 'Another product',
		price: 7.2,
		description: 'Cool, cool, cool',
		id: '02',
	},
	{
		title: 'Amazing product',
		price: 5.25,
		description: 'You must have this!',
		id: '03',
	},
];

const Products = (props) => {
	return (
		<section className={classes.products}>
			<h2>Buy your favorite products</h2>
			<ul>
				{products.map((product) => (
					<ProductItem
						key={product.id}
						title={product.title}
						price={product.price}
						description={product.description}
						id={product.id}
					/>
				))}
			</ul>
		</section>
	);
};

export default Products;
