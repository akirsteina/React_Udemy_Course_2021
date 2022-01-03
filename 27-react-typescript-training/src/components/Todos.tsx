import Todo from '../models/todo';
import TodoItem from './TodoItem';
import classes from './Todos.module.css';

const Todos: React.FC<{ items: Todo[] }> = (props) => {
	return (
		<ul className={classes.todos}>
			{props.items.map((item) => {
				return <TodoItem key={item.id} text={item.text}></TodoItem>;
			})}
		</ul>
	);
};

export default Todos;
