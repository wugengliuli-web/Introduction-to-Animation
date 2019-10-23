import Mock from 'mockjs';
import {
	allComic
} from './data.js'

Mock.mock(RegExp('/home/searchTypes' + '.*'), 'post', res => {
	res.body = JSON.parse(res.body);
	let newComic = [];
	allComic.forEach((v, i) => {
		res.body.types.some((k, j) => {
			if (!v.types.includes(k)) return true;
			if (j == res.body.types.length - 1) newComic.push(v);
		})
	})
	let length = Math.ceil(newComic.length / 9);
	while (newComic.length > 9) {
		newComic.pop();
	}
	return {
		code: 1,
		Link: '/comic',
		allLength: length,
		allComic: newComic
	}
})