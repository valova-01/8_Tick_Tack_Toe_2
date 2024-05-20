import React, { useState } from 'react';

import GameLayout from './GameLayout';

const WIN_PATTERNS = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6],
];

const Game = () => {
	const [currentPlayer, setCurrentPlayer] = useState('X');
	const [isGameEnded, setIsGameEnded] = useState(false);
	const [isDraw, setIsDraw] = useState(false);
	const [field, setField] = useState(Array(9).fill(''));

	const handleCellClick = (index) => {
		if (!field[index] && !isGameEnded) {
			const newField = [...field];
			newField[index] = currentPlayer;
			setField(newField);

			if (checkWinner(newField, currentPlayer)) {
				setIsGameEnded(true);
			} else if (newField.every((cell) => cell !== '')) {
				setIsDraw(true);
				setIsGameEnded(true);
			} else {
				setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
			}
		}
	};

	const handleRestart = () => {
		setCurrentPlayer('X');
		setIsGameEnded(false);
		setIsDraw(false);
		setField(Array(9).fill(''));
	};

	const checkWinner = (currentField, player) => {
		return WIN_PATTERNS.some((pattern) => pattern.every((index) => currentField[index] === player));
	};

	return (
		<GameLayout
			field={field}
			handleCellClick={handleCellClick}
			isGameEnded={isGameEnded}
			isDraw={isDraw}
			handleRestart={handleRestart}
			currentPlayer={currentPlayer}
		/>
	);
};

export default Game;
