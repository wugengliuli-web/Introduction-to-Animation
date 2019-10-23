import {
	CHANGE_COMIC,
	CLEAR_COMIC
} from './comicActionTypes.js';
const comicState = {
	comic: {}
}

const comicReducer = (state = comicState, action) => {
	if (action.type === CHANGE_COMIC) {
		return {
			...state,
			comic: action.comic
		}
	}
	if (action.type === CLEAR_COMIC) {
		return {
			...state,
			comic: {}
		}
	}
	return state
}

export default comicReducer