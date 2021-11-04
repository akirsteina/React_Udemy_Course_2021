import UserItem from './UserItem';
import style from '../../assets/UsersList.module.css';

const UsersList = (props) => {
	return (
		<div className={style.users}>
			{props.users.map((user) => (
				<UserItem username={user.username} age={user.age} key={user.id} />
			))}
		</div>
	);
};
export default UsersList;
