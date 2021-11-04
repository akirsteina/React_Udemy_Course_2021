import { useState } from 'react';
import Button from '../UI/Button';
import styles from '../../assets/AddNewUser.module.css';

const AddNewUserForm = () => {
	const [username, setUsername] = useState('');
	const [userAge, setUserAge] = useState('');

	const usernameInputHandler = (event) => {
		setUsername(event.target.value);
	};
	const userAgeInputHandler = (event) => {
		setUserAge(event.target.value);
	};

	const formSubmitHandler = (event) => {
		event.preventDefault();
		const userId = Math.random().toString();
		console.log(username, userAge, userId);
		setUsername('');
		setUserAge('');
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
					<input type='text' value={username} onChange={usernameInputHandler} />
				</div>
				<div>
					<label>Age (Years)</label>
					<input type='number' value={userAge} onChange={userAgeInputHandler} />
				</div>
				<Button title={button.title} type={button.type} />
			</form>
		</div>
	);
};

export default AddNewUserForm;
