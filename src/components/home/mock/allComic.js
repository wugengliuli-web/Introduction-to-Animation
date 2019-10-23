import Mock from 'mockjs';
import {
	allComic
} from './data.js'
import store from '../../../store/index.js';
export default Mock.mock(RegExp('/home/allComic' + '.*'), 'get', res => {
	if (store.getState().homeReducer.checkedTagArray.length !== 0) {
		const index = parseInt(res.url.split('=')[1]);
		const checkedTagArray = store.getState().homeReducer.checkedTagArray;
		let newComic = [];
		allComic.forEach((v, i) => {
			checkedTagArray.some((k, j) => {
				if (!v.types.includes(k)) return true;
				if (j == checkedTagArray.length - 1) newComic.push(v);
			})
		})
		let Comic = []
		for (let i = index * 9; i < index * 9 + 9 && i < newComic.length; i++) {
			Comic.push(newComic[i])
		}
		return {
			code: 1,
			Link: '/comic',
			allLength: Math.ceil(allComic.length / 9),
			allComic: Comic
		}
	} else {
		const index = parseInt(res.url.split('=')[1]);
		let newComics = [];
		for (let i = index * 9; i < index * 9 + 9 && i < allComic.length; i++) {
			newComics.push(allComic[i])
		}
		return {
			code: 1,
			Link: '/comic',
			allLength: Math.ceil(allComic.length / 9),
			allComic: newComics
		}
	}
})