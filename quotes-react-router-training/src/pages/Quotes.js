import { NavLink } from 'react-router-dom';
import { Fragment } from 'react/cjs/react.production.min';

const Quotes = () => {
	return (
		<Fragment>
			<h1>All quotes</h1>
			<ul>
				<li>
					<NavLink to='/quotes/q1'>Quote 1</NavLink>
				</li>
				<li>
					<NavLink to='/quotes/q2'>Quote 2</NavLink>
				</li>
			</ul>
		</Fragment>
	);
};

export default Quotes;
