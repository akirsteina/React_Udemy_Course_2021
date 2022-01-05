import { useContext } from 'react';
import { TodosContext } from '../store/todos-context';

// import Todo from '../models/todo';
import TodoItem from './TodoItem';
import classes from './Todos.module.css';

// <{ items: Todo[]; onDeleteTodo: (id: string) => void }>
const Todos: React.FC = () => {
	const todosCtx = useContext(TodosContext);
	return (
		<ul className={classes.todos}>
			{todosCtx.items.map((item) => {
				return (
					<TodoItem
						key={item.id}
						text={item.text}
						onDeleteTodo={todosCtx.removeTodo.bind(null, item.id)}
					></TodoItem>
				);
			})}
		</ul>
	);
};

export default Todos;
