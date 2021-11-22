import { NavLink } from 'react-router-dom';
const MainHeader = () => {
	return (
		<header>
			<nav>
				<ul>
					<li>
						<NavLink to='/welcome'>Home</NavLink>
					</li>
					<li>
						<NavLink to='/products'>Products</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default MainHeader;
