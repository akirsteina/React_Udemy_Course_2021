import React from 'react';
import AddNewUser from './components/Users/AddNewUser';
import UsersList from './components/Users/UsersList';
import userData from './data/users.json';

function App() {
	return (
		<div>
			<AddNewUser />
			<UsersList users={userData} />
		</div>
	);
}

export default App;
