import { NavLink } from 'react-router-dom';

const MainHeader = () => {
	return (
		<header>
			<nav>
				<ul>
					<li>
						<NavLink to='/quotes'>All quotes</NavLink>
					</li>
					<li>
						<NavLink to='/new-quote'>Add new</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default MainHeader;
