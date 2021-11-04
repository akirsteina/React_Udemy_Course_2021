const UserItem = (props) => {
	return (
		<div>
			{props.username} ({props.age} years old)
		</div>
	);
};

export default UserItem;
