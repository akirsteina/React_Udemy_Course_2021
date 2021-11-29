import React, { useRef, useImperativeHandle } from 'react';

import classes from './InputField.module.css';

const InputField = React.forwardRef((props, ref) => {
	const inputRef = useRef();

	const activate = () => {
		inputRef.current.focus();
	};

	useImperativeHandle(ref, () => {
		return {
			focus: activate,
		};
	});

	return (
		<div className={`${classes.control} ${props.isValid === false ? classes.invalid : ''}`}>
			<label ref={inputRef} htmlFor={props.id}>
				{props.label}
			</label>
			<input ref={inputRef} type={props.type} id={props.id} value={props.value} onChange={props.onChange} onBlur={props.onBlur} />
		</div>
	);
});

export default InputField;
