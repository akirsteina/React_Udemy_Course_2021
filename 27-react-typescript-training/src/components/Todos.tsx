import Todo from '../models/todo';
import TodoItem from './TodoItem';
import classes from './Todos.module.css';

const Todos: React.FC<{ items: Todo[]; onDeleteTodo: (id: string) => void }> = (
	props
) => {
	return (
		<ul className={classes.todos}>
			{props.items.map((item) => {
				return (
					<TodoItem
						key={item.id}
						text={item.text}
						onDeleteTodo={props.onDeleteTodo.bind(null, item.id)}
					></TodoItem>
				);
			})}
		</ul>
	);
};

export default Todos;
