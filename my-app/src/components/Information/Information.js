import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import InformationLayout from './InformationLayout';

export const Information = ({ currentPlayer, isGameEnded, isDraw }) => {
	const [status, setStatus] = useState('');

	useEffect(() => {
		if (isDraw) {
			setStatus('Ничья');
		} else if (isGameEnded) {
			setStatus(`Победа: ${currentPlayer}`);
		} else {
			setStatus(`Ходит: ${currentPlayer}`);
		}
	}, [isDraw, isGameEnded, currentPlayer]);

	return <InformationLayout status={status} />;
};

Information.propTypes = {
	currentPlayer: PropTypes.string,
	isGameEnded: PropTypes.bool,
	isDraw: PropTypes.bool,
};
