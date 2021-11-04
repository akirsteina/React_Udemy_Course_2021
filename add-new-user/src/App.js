import React from 'react';
import { useState } from 'react';
import AddNewUser from './components/Users/AddNewUserForm';
import UsersList from './components/Users/UsersList';
import userData from './data/users.json';

function App() {
	const [usersList, setUsersList] = useState(initialUsers);

	const addNewUserHandler = (user) => {
		setUsersList((previousUsers) => {
			return [user, ...previousUsers];
		});
	};

	return (
		<div>
			<AddNewUser />
			<UsersList users={usersList} onAddNewUser={addNewUserHandler} />
		</div>
	);
}

export default App;
