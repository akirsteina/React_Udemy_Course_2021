import { useState } from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import Modal from '../UI/ErrorModal';
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
		let message;
		event.preventDefault();
		if (enteredUsername.trim().length === 0 && !enteredUserAge) {
			message = 'Please add user data';
			Modal(message);
			return;
		} else if (enteredUsername.trim().length === 0) {
			message = 'No username';
			Modal(message);
			setEnteredUserAge('');
			return;
		} else if (!enteredUserAge) {
			message = 'No age';
			Modal(message);
			setEnteredUserAge('');
			return;
		} else if (enteredUserAge < 0) {
			message = 'Please enter a value that is bigger than 0';
			Modal(message);
			setEnteredUserAge('');
			return;
		} else if (enteredUserAge % 1 !== 0) {
			message = 'Please enter valid age';
			Modal(message);
			setEnteredUserAge('');
			return;
		}
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
		<Card>
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
		</Card>
	);
};

export default AddNewUserForm;
