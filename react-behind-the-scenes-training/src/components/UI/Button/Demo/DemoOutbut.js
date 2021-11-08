import React from 'react';

const DemoOutput = (props) => {
	console.log('Demo output');
	return <p>{props.show ? 'This is new!' : ''}</p>;
};

export default React.memo(DemoOutput); //only if value of props chages, funtion shold be reexecuted
// pick key parts in component tree to cut out whole branches
