import Mock from 'mockjs';
import {
	allComic
} from './data.js'

export default Mock.mock(RegExp('/home/searchName' + '.*'), 'get', res => {
	let name = res.url.split('=')[1];
	name = decodeURIComponent(name);
	if (name === '') {
		return {
			code: 1,
			Link: '/comic',
			allLength: Math.ceil(allComic.length / 9),
			allComic
		}
	} else {
		let newAllComic = [];
		allComic.forEach((v, i) => {
			if (v.name.toUpperCase().indexOf(name.toUpperCase()) !== -1)
				newAllComic.push(v);
		})
		return {
			code: 1,
			Link: '/comic',
			allLength: Math.ceil(newAllComic.length / 9),
			allComic: newAllComic
		}
	}
})