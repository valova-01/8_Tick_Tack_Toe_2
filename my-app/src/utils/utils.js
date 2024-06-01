import { WIN_PATTERNS } from '../constans/WIN_PATERN';
export const checkWinner = (currentField, player) => {
	return WIN_PATTERNS.some((pattern) => pattern.every((index) => currentField[index] === player));
};

export const chekDarw = (field) => {
	return field.every((cell) => cell);
};
