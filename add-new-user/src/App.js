import { useState, Fragment } from 'react';
import AddNewUserForm from './components/Users/AddNewUserForm';
import UsersList from './components/Users/UsersList';

const initialUsers = [
	{ username: 'Awil110', userAge: 20, userId: '01' },
	{ username: 'level1', userAge: 22, userId: '02' },
];

function App() {
	const [usersList, setUsersList] = useState(initialUsers);

	const addNewUserHandler = (user) => {
		setUsersList((previousUsers) => {
			return [user, ...previousUsers];
		});
	};

	return (
		<Fragment>
			<AddNewUserForm onAddNewUser={addNewUserHandler} />
			<UsersList users={usersList} />
		</Fragment>
	);
}

export default App;
// <> and </> should also work as wrappers, but not always
