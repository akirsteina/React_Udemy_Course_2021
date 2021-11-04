import Button from '../UI/Button';
import styles from '../../assets/AddNewUser.module.css';

const AddNewUser = () => {
	const button = {
		title: 'Add new user',
		type: 'submit',
	};

	const formSubmitHandler = (event) => {
		event.preventDefault();
		console.log('submitted');
	};

	return (
		<div className={styles.input}>
			<form onSubmit={formSubmitHandler}>
				<div>
					<label>Username</label>
					<input type='text' />
				</div>
				<div>
					<label>Age</label>
					<input type='number' />
				</div>
				<Button title={button.title} type={button.type} />
			</form>
		</div>
	);
};

export default AddNewUser;
