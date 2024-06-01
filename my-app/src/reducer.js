import { SET_CURRENT_PLAYER, SET_GAME_ENDED, SET_DRAW, SET_FIELD, RESET } from './action';

const initialState = {
	currentPlayer: 'X',
	isGameEnded: false,
	isDraw: false,
	field: Array(9).fill(''),
};

export const gameReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_CURRENT_PLAYER:
			return { ...state, currentPlayer: state.currentPlayer === 'X' ? 'O' : 'X' };
		case SET_GAME_ENDED:
			return { ...state, isGameEnded: true };
		case SET_DRAW:
			return { ...state, isDraw: true };
		case SET_FIELD:
			return { ...state, field: action.payload };
		case RESET:
			return initialState;
		default:
			return state;
	}
};
