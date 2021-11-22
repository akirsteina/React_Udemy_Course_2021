// import { Route, Routes } from 'react-router-dom';
import { Outlet } from 'react-router';

const Welcome = () => {
	return (
		<section>
			<h1>The Welcome Page</h1>
			<Outlet />
		</section>
	);
};

export default Welcome;

/* <Routes>
/welcome/ is already implied 
<Route path='/new-user' element={<p>Welcome, new user!</p>}></Route>
</Routes> */
