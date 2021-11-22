import { NavLink } from 'react-router-dom';
import classes from './MainHeader.module.css';

const MainHeader = () => {
	return (
		<header className={classes.header}>
			<div className={classes.logo}>Great Quotes</div>
			<nav className={classes.nav}>
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
