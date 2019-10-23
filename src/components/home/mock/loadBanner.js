import {
	BannerData
} from './data.js';
import Mock from 'mockjs'
Mock.mock('/home/introduce/bannerImg', 'get', res => {
	return {
		code: 1,
		bannerImg: BannerData
	}
})