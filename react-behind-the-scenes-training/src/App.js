import React, { useState, useCallback } from 'react';

import Button from './components/UI/Button/Button';

import './App.css';
import DemoOutput from './components/UI/Button/Demo/DemoOutbut';

function App() {
	const [showparagraph, setShowParagraph] = useState(false);

	console.log('App running');

	const toggleParagraphHandle = useCallback(() => {
		setShowParagraph((previousShowParagraph) => {
			return !previousShowParagraph;
		});
	}, []);
	// useCallback will save a function of our choice in react memory and allow to reuse this

	return (
		<div className='app'>
			<h1>Hi there!</h1>
			<DemoOutput show={false} />
			<Button onClick={toggleParagraphHandle}>Show paragraph!</Button>
		</div>
	);
}

export default App;
