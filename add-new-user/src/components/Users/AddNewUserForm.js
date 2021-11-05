import { useState, useRef } from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';
import Wrapper from '../Helpers/Wrapper';
import styles from '../../assets/AddNewUser.module.css';

const AddNewUserForm = (props) => {
	const nameInputRef = useRef();
	const ageInputRef = useRef();
	// can attach to any HTML element

	// const [enteredUsername, setEnteredUsername] = useState('');
	// const [enteredUserAge, setEnteredUserAge] = useState('');
	const [error, setError] = useState('');

	// const usernameInputHandler = (event) => {
	// 	setEnteredUsername(event.target.value);
	// };
	// const userAgeInputHandler = (event) => {
	// 	setEnteredUserAge(event.target.value);
	// };

	const errorHandler = () => {
		setError('');
	};

	const formSubmitHandler = (event) => {
		event.preventDefault();
		const enteredName = nameInputRef.current.value;
		const enteredAge = ageInputRef.current.value;
		if (enteredName.trim().length === 0 && enteredAge.trim().length === 0) {
			setError({
				title: 'Invalid input',
				message: 'Please enter username and user age!',
			});
			return;
		} else if (enteredName.trim().length === 0) {
			setError({
				title: 'Invalid username',
				message: 'Please enter username!',
			});
			// setEnteredUserAge('');
			return;
		} else if (enteredAge.trim().length === 0) {
			setError({
				title: 'Invalid age',
				message: 'Please enter user age!',
			});
			// setEnteredUserAge('');
			return;
		} else if (+enteredAge < 1) {
			setError({
				title: 'Invalid age',
				message: 'Please enter valid age (> 0)!',
			});
			// setEnteredUserAge('');
			return;
		}
		//  else if (+enteredAge % 1 !== 0) {
		// 	setError({
		// 		title: 'Invalid age',
		// 		message: 'Please enter valid age (whole numbers)!',
		// 	});
		// setEnteredUserAge('');
		// 	return;
		// }
		const newUserData = {
			username: enteredName,
			userAge: enteredAge,
			userId: Math.random().toString(),
		};
		props.onAddNewUser(newUserData);
		nameInputRef.current.value = '';
		ageInputRef.current.value = '';
		// setEnteredUsername('');
		// setEnteredUserAge('');
	};

	// value={enteredUsername} onChange={usernameInputHandler}
	// value={enteredUserAge} onChange={userAgeInputHandler}
	return (
		<Wrapper>
			{error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
			<Card className={styles.input}>
				<form onSubmit={formSubmitHandler}>
					<div>
						<label htmlFor='username'>Username</label>
						<input type='text' id='username' ref={nameInputRef} />
					</div>
					<div>
						<label htmlFor='age'>Age (Years)</label>
						<input type='number' id='age' ref={ageInputRef} />
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
