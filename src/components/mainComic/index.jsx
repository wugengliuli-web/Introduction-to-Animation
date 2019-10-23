import React, {
	Component,
	Fragment
} from 'react'
import './index.css'
import { connect } from 'react-redux'
import { Spin } from 'antd'
import Comic from './components/comicHeader.jsx'
import HeaderBack from './components/headerBack.jsx'
import { clearComic } from './store/comicAction.js';
class ComicMain extends Component {
	//组件销毁时清除数据
	componentWillUnmount() {
		this.props.clearComic();
	}
	render() {
		return (
			<Fragment>
				{
					this.props.comic.code === 1 ?
					<div className="comicMain">
						<HeaderBack {...this.props} />
						<Comic {...this.props} />
					</div> 
					:
					<div className="load">
						<Spin size="large" />
					</div>
				}
			</Fragment>
		)
	}
}

const mapState = state => ({
	comic: state.comicReducer.comic
})

const mapDispatch = dispatch => ({
	clearComic() {
		const action = clearComic();
		dispatch(action);
	}
})

export default connect(mapState, mapDispatch)(ComicMain);