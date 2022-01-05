import { useState } from 'react';
import Todo from '../models/todo';
import React from 'react';

type TodosContextObj = {
	items: Todo[];
	addTodo: (text: string) => void;
	removeTodo: (id: string) => void;
};

export const TodosContext = React.createContext<TodosContextObj>({
	items: [],
	addTodo: () => {},
	removeTodo: (id: string) => {},
});

const TodosContextProvider: React.FC = (props) => {
	const [todoList, setTodoList] = useState<Todo[]>([]);

	const addTodoHandler = (text: string) => {
		const newTodo = new Todo(text);
		setTodoList((prevList) => [...prevList, newTodo]);
	};

	const removeTodoHandler = (id: string) => {
		setTodoList((prevState) => {
			return prevState.filter((todo) => todo.id !== id);
		});
	};

	const contextValue: TodosContextObj = {
		items: todoList,
		addTodo: addTodoHandler,
		removeTodo: removeTodoHandler,
	};

	return (
		<TodosContext.Provider value={contextValue}>
			{props.children}
		</TodosContext.Provider>
	);
};

export default TodosContextProvider;
