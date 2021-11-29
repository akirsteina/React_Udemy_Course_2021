import { Fragment } from 'react';
import { Route } from 'react-router';

const Welcome = () => {
	return (
		<Fragment>
			<h1>The welcome page!</h1>
			<Route path='/welcome/new-user'>
				<p>Welcome, New User!</p>
			</Route>
		</Fragment>
	);
};

export default Welcome;
