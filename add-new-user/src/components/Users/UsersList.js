import Card from '../UI/Card';
import style from '../../assets/UsersList.module.css';

const UsersList = (props) => {
	return (
		<Card className={style.users}>
			<ul>
				{props.users.map((user) => (
					<li key={user.userId}>
						{user.username} ({user.userAge} years old)
					</li>
				))}
			</ul>
		</Card>
	);
};
export default UsersList;
