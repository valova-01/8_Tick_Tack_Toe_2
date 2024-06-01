import InformationLayout from './InformationLayout';
import { store } from '../../store';

export const Information = () => {
	const { currentPlayer, isGameEnded, isDraw } = store.getState();
	let status;

	if (isDraw) {
		status = 'Ничья';
	} else if (isGameEnded) {
		status = `Победа: ${currentPlayer}`;
	} else {
		status = `Ходит: ${currentPlayer}`;
	}

	return <InformationLayout status={status} />;
};
