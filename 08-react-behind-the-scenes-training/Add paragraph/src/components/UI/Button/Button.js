import React from 'react';

import classes from './Button.module.css';

const Button = (props) => {
	console.log('Button running');
	return (
		<button type={props.type || 'button'} className={`${classes.button} ${props.className}`} onClick={props.onClick} disabled={props.disabled}>
			{props.children}
		</button>
	);
};

export default React.memo(Button);
// demo on button does not work as identical objects (functions are objects in JS) are not equal
// works with useCallback hook
