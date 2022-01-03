import './App.css';
import Todos from './components/Todos';
import Todo from './models/todo';
import NewTodo from './components/NewTodo';
import { useState } from 'react';

function App() {
	const [todoList, setTodoList] = useState<Todo[]>([]);

	const addTodoHandler = (text: string) => {
		const newTodo = new Todo(text);
		setTodoList((prevList) => [...prevList, newTodo]);
	};

	return (
		<div>
			<Todos items={todoList} />
			<NewTodo onAddTodo={addTodoHandler} />
		</div>
	);
}

export default App;
