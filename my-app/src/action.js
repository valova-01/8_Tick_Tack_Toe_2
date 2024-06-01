export const SET_CURRENT_PLAYER = 'SET_CURRENT_PLAYER';
export const SET_GAME_ENDED = 'SET_GAME_ENDED';
export const SET_DRAW = 'SET_DRAW';
export const SET_FIELD = 'SET_FIELD';
export const RESET = 'RESET';

export const setCurrentPlayer = (player) => ({ type: SET_CURRENT_PLAYER, payload: player });
export const setGameEnded = (isEnded) => ({ type: SET_GAME_ENDED, payload: isEnded });
export const setDraw = (isDraw) => ({ type: SET_DRAW, payload: isDraw });
export const setField = (field) => ({ type: SET_FIELD, payload: field });
export const reset = () => ({ type: RESET });
