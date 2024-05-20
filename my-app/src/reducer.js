import { SET_CURRENT_PLAYER, SET_GAME_ENDED, SET_DRAW, SET_FIELD } from './action';

const initialState = {
	currentPlayer: 'X',
	isGameEnded: false,
	isDraw: false,
	field: Array(9).fill(''),
};

export const gameReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_CURRENT_PLAYER:
			return { ...state, currentPlayer: action.payload };
		case SET_GAME_ENDED:
			return { ...state, isGameEnded: action.payload };
		case SET_DRAW:
			return { ...state, isDraw: action.payload };
		case SET_FIELD:
			return { ...state, field: action.payload };
		default:
			return state;
	}
};
