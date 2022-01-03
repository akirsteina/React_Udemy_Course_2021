import React, { useRef } from 'react';
import classes from './NewTodo.module.css';

const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {
	const inputTextRef = useRef<HTMLInputElement>(null);

	const submitHandler = (event: React.FormEvent) => {
		event.preventDefault();
		const inputText = inputTextRef.current!.value;
		if (inputText.trim().length === 0) {
			// throw an error
			return;
		}
		props.onAddTodo(inputText);
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
