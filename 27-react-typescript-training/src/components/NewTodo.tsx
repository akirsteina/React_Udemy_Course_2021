import React, { useRef } from 'react';

import { useContext } from 'react';
import { TodosContext } from '../store/todos-context';

import classes from './NewTodo.module.css';

// <{ onAddTodo: (text: string) => void }>
const NewTodo: React.FC = () => {
	const todosCtx = useContext(TodosContext);

	const inputTextRef = useRef<HTMLInputElement>(null);

	const submitHandler = (event: React.FormEvent) => {
		event.preventDefault();
		const inputText = inputTextRef.current!.value;
		if (inputText.trim().length === 0) {
			// throw an error
			return;
		}
		todosCtx.addTodo(inputText);
	};

	return (
		<form onSubmit={submitHandler} className={classes.form}>
			<label htmlFor='text'>Todo Text</label>
			<input type='text' id='text' ref={inputTextRef}></input>
			<button>Add Todo</button>
		</form>
	);
};

export default NewTodo;
