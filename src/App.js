// import './index.css';
import React, { useState, useEffect } from 'react';
import Top from './components/top';
import Middle from './components/Middle';
import Bottom from './components/bottom';
import './components/Fontawesomeicons/index';
import data from './components/genres.json';

const App = () => {
	const [genres, PassGenres] = useState({});

	useEffect(() => {
		PassGenres(data);
	}, []);
	return (
		<div>
			<Top data={genres}></Top>
			<Middle></Middle>
			<Bottom></Bottom>
		</div>
	);
};

export default App;
