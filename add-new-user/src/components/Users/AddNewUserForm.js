import { useState } from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';
import Wrapper from '../Helpers/Wrapper';
import styles from '../../assets/AddNewUser.module.css';

const AddNewUserForm = (props) => {
	const [enteredUsername, setEnteredUsername] = useState('');
	const [enteredUserAge, setEnteredUserAge] = useState('');
	const [error, setError] = useState('');

	const usernameInputHandler = (event) => {
		setEnteredUsername(event.target.value);
	};
	const userAgeInputHandler = (event) => {
		setEnteredUserAge(event.target.value);
	};

	const errorHandler = () => {
		setError('');
	};

	const formSubmitHandler = (event) => {
		event.preventDefault();
		if (enteredUsername.trim().length === 0 && enteredUserAge.trim().length === 0) {
			setError({
				title: 'Invalid input',
				message: 'Please enter username and user age!',
			});
			return;
		} else if (enteredUsername.trim().length === 0) {
			setError({
				title: 'Invalid username',
				message: 'Please enter username!',
			});
			setEnteredUserAge('');
			return;
		} else if (!enteredUserAge) {
			setError({
				title: 'Invalid age',
				message: 'Please enter user age!',
			});
			setEnteredUserAge('');
			return;
		} else if (+enteredUserAge < 1) {
			setError({
				title: 'Invalid age',
				message: 'Please enter valid age (> 0)!',
			});
			setEnteredUserAge('');
			return;
		} else if (+enteredUserAge % 1 !== 0) {
			setError({
				title: 'Invalid age',
				message: 'Please enter valid age (whole numbers)!',
			});
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

	return (
		<Wrapper>
			{error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
			<Card className={styles.input}>
				<form onSubmit={formSubmitHandler}>
					<div>
						<label htmlFor='username'>Username</label>
						<input type='text' id='username' value={enteredUsername} onChange={usernameInputHandler} />
					</div>
					<div>
						<label htmlFor='age'>Age (Years)</label>
						<input type='number' id='age' value={enteredUserAge} onChange={userAgeInputHandler} />
					</div>
					<Button type={'submit'} onclick={formSubmitHandler}>
						Add new user
					</Button>
				</form>
			</Card>
		</Wrapper>
	);
};

export default AddNewUserForm;
