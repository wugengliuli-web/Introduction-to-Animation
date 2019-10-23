import {
	combineReducers
} from 'redux'
import homeReducer from '../components/home/store/homeReducer.js'
import comicReducer from '../components/mainComic/store/comicReducer.js'
const reducer = combineReducers({
	homeReducer,
	comicReducer
})

export default reducer