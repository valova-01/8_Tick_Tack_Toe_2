import React from 'react';
import PropTypes from 'prop-types';
import { Information } from '../Information/Information';
import { Field } from '../Field/Field';
import styles from '../../App.module.css';

const GameLayout = ({ field, handleCellClick, currentPlayer, handleRestart, isGameEnded, isDraw }) => {
	return (
		<div className="game-layout">
			<Information currentPlayer={currentPlayer} isGameEnded={isGameEnded} isDraw={isDraw} />
			<Field field={field} onCellClick={handleCellClick} />
			<div className={styles.restartButton}>
				<button onClick={handleRestart}>Начать заново</button>
			</div>
		</div>
	);
};

GameLayout.propTypes = {
	field: PropTypes.array,
	handleCellClick: PropTypes.func,
	currentPlayer: PropTypes.string,
	handleRestart: PropTypes.func,
	isGameEnded: PropTypes.bool,
	isDraw: PropTypes.bool,
};

export default GameLayout;
