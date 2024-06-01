import React from 'react';
import FieldLayout from './FieldLayout';
import { store } from '../../store';
import { setField, setGameEnded, setDraw, setCurrentPlayer } from '../../action';
import { checkWinner, chekDarw } from '../../utils/utils.js';

export const Field = () => {
	const { field, currentPlayer, isGameEnded } = store.getState();
	const handleCellClick = (index) => {
		if (!field[index] && !isGameEnded) {
			const newField = [...field];
			newField[index] = currentPlayer;
			store.dispatch(setField(newField));
			if (checkWinner(newField, currentPlayer)) {
				store.dispatch(setGameEnded());
			} else if (chekDarw(newField)) {
				store.dispatch(setDraw());
				store.dispatch(setGameEnded());
			} else {
				store.dispatch(setCurrentPlayer());
			}
		}
	};

	return <FieldLayout onCellClick={handleCellClick} />;
};
