import { useState } from 'react';
import Button from '../UI/Button';
import styles from '../../assets/AddNewUser.module.css';

const AddNewUserForm = (props) => {
	const [enteredUsername, setEnteredUsername] = useState('');
	const [enteredUserAge, setEnteredUserAge] = useState('');

	const usernameInputHandler = (event) => {
		setEnteredUsername(event.target.value);
		console.log(enteredUsername);
	};
	const userAgeInputHandler = (event) => {
		setEnteredUserAge(event.target.value);
		console.log(enteredUserAge);
	};

	const formSubmitHandler = (event) => {
		event.preventDefault();
		const newUserData = {
			username: enteredUsername,
			userAge: enteredUserAge,
			userId: Math.random().toString(),
		};
		props.onAddNewUser(newUserData);
		setEnteredUsername('');
		setEnteredUserAge('');
	};

	const button = {
		title: 'Add new user',
		type: 'submit',
	};

	return (
		<div className={styles.input}>
			<form onSubmit={formSubmitHandler}>
				<div>
					<label>Username</label>
					<input type='text' value={enteredUsername} onChange={usernameInputHandler} />
				</div>
				<div>
					<label>Age (Years)</label>
					<input type='number' value={enteredUserAge} onChange={userAgeInputHandler} />
				</div>
				<Button title={button.title} type={button.type} />
			</form>
		</div>
	);
};

export default AddNewUserForm;
