import Mock from 'mockjs'

import {
	allComic
} from './data.js'


export default Mock.mock('/api/hotRecommend', res => {
	let hotRecommend = {
		"code": 1,
		"Link": "/comic",
		"hotRecommend": []
	}
	allComic.forEach((v, i) => {
		if (v.isHot) {
			hotRecommend.hotRecommend.push(v);
		}
	})
	return hotRecommend
})