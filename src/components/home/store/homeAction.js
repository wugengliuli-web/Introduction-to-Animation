import {
	CHANGE_NAVLIST,
	CHANGE_HOMEPAGEBANNERTITLE,
	CHANGE_HOTRECOMMEND,
	CHANGE_TAGARRAY,
	CHANGE_ALLCOMIC,
	CHANGE_BANNERIMGARRAY,
	CHANGE_TIMELINE
} from './homeActionTypes.js'
import axios from 'axios'
import '../mock/hotRecommend.js'
import '../mock/allComic.js';
import '../mock/searchName.js';
import '../mock/searchTypes.js';
import '../mock/loadBanner.js';
import '../mock/timeLine.js';
export const getNavList = () => {
	return (dispatch) => {
		axios.get('./api/nav.json').then(res => {
			const action = changeNavList(res.data)
			dispatch(action)
		})
	}
}

export const changeNavList = (navList) => ({
	type: CHANGE_NAVLIST,
	navList
})


export const getHomePageBannerTitle = () => {
	return (dispatch) => {
		axios.get('./api/homePageBannerTitle.json').then(res => {
			const action = changeHomePageBannerTitle(res.data);
			dispatch(action)
		})
	}
}

export const changeHomePageBannerTitle = (homePageBannerTitle) => ({
	type: CHANGE_HOMEPAGEBANNERTITLE,
	homePageBannerTitle
})


export const getHotRecommend = () => {
	return (dispatch) => {
		axios.get('/api/hotRecommend').then(res => {
			const action = changeHotRecommend(res.data)
			dispatch(action)
		})
	}
}

export const changeHotRecommend = (hotRecommend) => ({
	type: CHANGE_HOTRECOMMEND,
	hotRecommend
})

export const getTagArray = () => {
	return (dispatch) => {
		axios.get('./api/tagCheck.json').then((res) => {
			const action = changeTagArray(res.data);
			dispatch(action);
		})
	}
}

export const changeTagArray = (tagArray) => ({
	type: CHANGE_TAGARRAY,
	tagArray
})

export const getAllComic = (index) => {
	return (dispatch) => {
		axios.get('/home/allComic', {
			params: {
				index
			}
		}).then(res => {
			const action = changeAllComic(res.data);
			dispatch(action)
		})
	}
}

export const changeAllComic = (allComic) => ({
	type: CHANGE_ALLCOMIC,
	allComic
})


export const searchName = (name) => {
	return (dispatch) => {
		axios.get('/home/searchName', {
			params: {
				name
			}
		}).then(res => {
			const action = changeAllComic(res.data);
			dispatch(action)
		})
	}
}

export const searchTypes = (types) => {
	return (dispatch) => {
		axios.post('/home/searchTypes', {
			types: types
		}).then(res => {
			const action = changeAllComic(res.data);
			dispatch(action)
		})
	}
}

export const getBannerImgArray = () => {
	return dispatch => {
		axios.get('/home/introduce/bannerImg').then(res => {
			const action = changeBannerImgArray(res.data);
			dispatch(action);
		})
	}
}

export const changeBannerImgArray = BannerImgArray => ({
	type: CHANGE_BANNERIMGARRAY,
	BannerImgArray
})

export const getTimeLine = () => {
	return dispatch => {
		axios.get('/home/introduce/timeLine').then(res => {
			const action = changeTimeLine(res.data);
			dispatch(action)
		})
	}
}

export const changeTimeLine = timeLine => ({
	type: CHANGE_TIMELINE,
	timeLine
})