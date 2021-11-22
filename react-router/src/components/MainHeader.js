import { NavLink } from 'react-router-dom';
import classes from '../Assets/MainHeader.module.css';
const MainHeader = () => {
	return (
		<header className={classes.header}>
			<nav>
				<ul>
					<li>
						<NavLink activeClassName={classes.active} to='/welcome'>
							Home
						</NavLink>
					</li>
					<li>
						<NavLink activeClassName={classes.active} to='/products'>
							Products
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default MainHeader;
