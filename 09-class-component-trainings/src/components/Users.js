import { Component } from 'react';
import User from './User';

import classes from './Users.module.css';

class Users extends Component {
	constructor() {
		super();
		// to initialize state
		this.state = {
			showUsers: true,
			// moreState 'Test'
		}; // for class based components state is always object
		// all use states in one constructor
	}

	componentDidUpdate() {
		if (this.props.users.length === 0) {
			throw new Error('No users provided');
		}
	}

	toggleUsersHandler = () => {
		this.setState((curState) => {
			return { showUsers: !curState.showUsers };
		}); // change state
		// merges, but not overrides, if several components in state, can update only one
	};

	render() {
		const usersList = (
			<ul>
				{this.props.users.map((user) => (
					<User key={user.id} name={user.name} />
				))}
			</ul>
		);
		return (
			<div className={classes.users}>
				<button onClick={this.toggleUsersHandler.bind(this)}>{this.state.showUsers ? 'Hide' : 'Show'} Users</button>
				{this.state.showUsers && usersList}
			</div>
		);
	}
}

// const Users = () => {
// 	const [showUsers, setShowUsers] = useState(true);

// 	const toggleUsersHandler = () => {
// 		setShowUsers((curState) => !curState);
// 	};

// 	const usersList = (
// 		<ul>
// 			{DUMMY_USERS.map((user) => (
// 				<User key={user.id} name={user.name} />
// 			))}
// 		</ul>
// 	);

// 	return (
// 		<div className={classes.users}>
// 			<button onClick={toggleUsersHandler}>{showUsers ? 'Hide' : 'Show'} Users</button>
// 			{showUsers && usersList}
// 		</div>
// 	);
// };

export default Users;
