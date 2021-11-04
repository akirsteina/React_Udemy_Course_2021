import UserItem from './UserItem';
import style from '../../assets/UsersList.module.css';

const UsersList = (props) => {
	return (
		<ul className={style.users}>
			{props.users.map((user) => (
				<UserItem username={user.username} age={user.userAge} key={user.userId} />
			))}
		</ul>
	);
};
export default UsersList;
