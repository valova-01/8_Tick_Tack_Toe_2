import { createStore } from 'redux';
import { gameReducer } from './reducer';

export const store = createStore(gameReducer);

let render = () => {};

export const subscribe = (observer) => {
	render = observer;
};

store.subscribe(() => {
	render();
});
