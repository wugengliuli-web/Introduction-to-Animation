import Mock from 'mockjs';

import {
	allComic
} from '../../home/mock/data.js';

Mock.mock(RegExp('/comic' + '.*'), 'get', res => {
	let comic = {};
	let id = parseInt(res.url.split('=')[1]);
	allComic.some((v, i) => {
		if (v.id === id) {
			comic = v;
			return true;
		}
	})
	return {
		code: 1,
		comic
	}
})

Mock.mock(RegExp('/home/homePage/search' + '.*'), 'get', res => {
	let comic = {};
	let name = decodeURIComponent(res.url.split('=')[1]);
	allComic.some((v, i) => {
		if (v.name === name) {
			comic = v;
			return true;
		}
	})
	if (JSON.stringify(comic) === "{}") {
		return {
			code: 0,
			comic
		}
	}
	return {
		code: 1,
		comic
	}
})