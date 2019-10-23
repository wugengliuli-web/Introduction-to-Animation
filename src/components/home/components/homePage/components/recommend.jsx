import React, {
	Component
} from 'react'
import {
	connect
} from 'react-redux'
import {
	Icon,
	Divider
} from 'antd'
import {
	getHotRecommend
} from '../../../store/homeAction.js'
import {
	Link
} from 'react-router-dom'
import { Spin } from 'antd';
import { getComic } from '../../../../mainComic/store/comicAction.js';
class Recommend extends Component {
	componentDidMount() {
		if(this.props.hotRecommend.code !== 1)
		this.props.getHotRecommend();
	}
	render() {
		return (
			<div className="recommend">
				<p><Icon type="tags" theme="twoTone" />热门推荐</p>
				<Divider />
				<ul>
					{
						this.props.hotRecommend.code === 1?
						this.props.hotRecommend.hotRecommend.map((v,i) => (
							<li key={i}>
								<Link to={this.props.hotRecommend.Link} data-index={v.id} onClick={(e) => {this.props.getComic(e)}}>
									<img src={v.img} alt={v.name} />
								</Link>
								<div className="content">
									<h1>{v.name}</h1>
									<h3>{v.introduce}</h3>
								</div>
							</li>
						))
						:
						<Spin size="large" />
					}
				</ul>
			</div>
		)
	}
}

const mapState = (state) => {
	return {
		hotRecommend: state.homeReducer.hotRecommend
	}
}

const mapDispatch = (dispatch) => {
	return {
		getHotRecommend: function() {
			const action = getHotRecommend();
			dispatch(action)
		},
		getComic(e) {
			let index = e.currentTarget.getAttribute('data-index')
			const action = getComic(index);
			dispatch(action)
		}
	}
}

export default connect(mapState,mapDispatch)(Recommend);