import React from 'react';
import Game from './components/Game/Game';
import styles from './App.module.css';

export const App = () => {
	return (
		<div className={styles.App}>
			<Game />
		</div>
	);
};
