import axios from 'axios';
import {
	CHANGE_COMIC,
	CLEAR_COMIC
} from './comicActionTypes.js';
import '../mock/comic.js'

export const getComic = (index) => {
	return dispatch => {
		axios.get('/comic', {
			params: {
				index
			}
		}).then(res => {
			const action = changeComic(res.data);
			dispatch(action);
		})
	}
}

export const searchComic = name => {
	return dispatch => {
		axios.get('/home/homePage/search', {
			params: {
				name
			}
		}).then(res => {
			const action = changeComic(res.data);
			dispatch(action);
		})
	}
}

export const changeComic = comic => ({
	type: CHANGE_COMIC,
	comic
})

export const clearComic = () => ({
	type: CLEAR_COMIC
})