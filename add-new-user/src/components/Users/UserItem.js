const UserItem = (props) => {
	return (
		<li>
			{props.username} ({props.age} years old)
		</li>
	);
};

export default UserItem;
