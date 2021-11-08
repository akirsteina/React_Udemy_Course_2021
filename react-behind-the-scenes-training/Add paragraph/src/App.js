import React, { useState, useCallback } from 'react';

import Button from './components/UI/Button/Button';

import './App.css';
import DemoOutput from './components/UI/Button/Demo/DemoOutbut';

function App() {
	const [showparagraph, setShowParagraph] = useState(false);
	const [allowToggling, setAllowToggling] = useState(false);

	console.log('App running');

	const toggleParagraphHandle = useCallback(() => {
		if (allowToggling) {
			setShowParagraph((previousShowParagraph) => {
				return !previousShowParagraph;
			});
		}
	}, [allowToggling]);
	// useCallback will save a function of our choice in react memory and allow to reuse this

	const allowToggleHandler = () => {
		setAllowToggling(!allowToggling);
	};

	return (
		<div className='app'>
			<h1>Hi there!</h1>
			<DemoOutput show={showparagraph} />
			<Button onClick={allowToggleHandler}>Allow toggling</Button>
			<Button onClick={toggleParagraphHandle}>Show paragraph!</Button>
		</div>
	);
}

export default App;
