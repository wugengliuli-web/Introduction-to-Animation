import {
	CHANGE_NAVLIST,
	CHANGE_HOMEPAGEBANNERTITLE,
	CHANGE_HOTRECOMMEND,
	CHANGE_TAGARRAY,
	CHANGE_ALLCOMIC,
	CHANGE_BANNERIMGARRAY,
	CHANGE_TIMELINE,
	CHANGE_CHECKEDTAGARRAY,
	CLEAT_COMIC
} from './homeActionTypes.js'

const homeState = {
	navList: {},
	homePageBannerTitle: {},
	hotRecommend: {},
	tagArray: {},
	checkedTagArray: [],
	allComic: {},
	bannerImgArray: {},
	timeLine: {}
}
const homeReducer = (state = homeState, action) => {
	if (action.type === CHANGE_NAVLIST) {
		return {
			...state,
			navList: action.navList
		}
	}
	if (action.type === CHANGE_HOMEPAGEBANNERTITLE) {
		return {
			...state,
			homePageBannerTitle: action.homePageBannerTitle
		}
	}
	if (action.type === CHANGE_HOTRECOMMEND) {
		return {
			...state,
			hotRecommend: action.hotRecommend
		}
	}
	if (action.type === CHANGE_TAGARRAY) {
		return {
			...state,
			tagArray: action.tagArray
		}
	}
	if (action.type === CHANGE_ALLCOMIC) {
		return {
			...state,
			allComic: action.allComic
		}
	}
	if (action.type === CHANGE_BANNERIMGARRAY) {
		return {
			...state,
			bannerImgArray: action.BannerImgArray
		}
	}
	if (action.type === CHANGE_TIMELINE) {
		return {
			...state,
			timeLine: action.timeLine
		}
	}
	if (action.type === CHANGE_CHECKEDTAGARRAY) {
		return {
			...state,
			checkedTagArray: action.checkedTagArray
		}
	}
	if (action.type === CLEAT_COMIC) {
		return {
			...state,
			allComic: {}
		}
	}
	return state
}
export default homeReducer