import React from 'react';
import  Game  from './components/Game/Game';
import styles from './App.module.css';

export const App = () => {
	const currentPlayer = 'X';
	const isGameEnded = false;
	const isDraw = false;

	return (
		<div className={styles.App}>
			<Game currentPlayer={currentPlayer} isGameEnded={isGameEnded} isDraw={isDraw} />
		</div>
	);
};
