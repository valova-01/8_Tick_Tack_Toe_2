import React from 'react';
import PropTypes from 'prop-types';
import InformationLayout from './InformationLayout';

export const Information = ({ currentPlayer, isGameEnded, isDraw }) => {
	let status = '';
	if (isDraw) {
		status = 'Ничья';
	} else if (isGameEnded) {
		status = `Победа: ${currentPlayer}`;
	} else {
		status = `Ходит: ${currentPlayer}`;
	}

	return <InformationLayout status={status} />;
};

Information.propTypes = {
	currentPlayer: PropTypes.string,
	isGameEnded: PropTypes.bool,
	isDraw: PropTypes.bool,
};
