import React, { useState, useEffect } from 'react';
import { reset } from '../../action';
import { store } from '../../store';
import GameLayout from './GameLayout';

const Game = () => {
	const [localState, setLocalState] = useState(null);

	useEffect(() => {
		const unsubscribge = store.subscribe(() => {
			setLocalState(Date.now());
		});

		return () => unsubscribge();
	}, []);

	const handleRestart = () => {
		store.dispatch(reset());
	};

	return <GameLayout localState={localState} handleRestart={handleRestart} />;
};

export default Game;
