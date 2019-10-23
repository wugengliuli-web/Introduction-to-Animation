import Mock from 'mockjs'
import {
	timeLine
} from './data.js';

export default Mock.mock('/home/introduce/timeLine', 'get', {
	code: 1,
	timeLine
})