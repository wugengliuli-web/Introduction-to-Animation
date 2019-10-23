import React, {
	Component
} from 'react'
import { Input, message } from 'antd';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import { searchComic } from '../../../../mainComic/store/comicAction.js'
var state = false;
class Search extends Component {
	componentWillReceiveProps(nextProps) {
		if(state) {
			if(nextProps.comic.code === 1) {
				this.success();
				setTimeout(() => {
					this.props.history.push('/comic');
					state = false;
				},1000)
			} else {
				this.warning();
				state = false;
			}
		}
	}
	render() {
		return (
			<div className="search">
				<Input.Search placeholder="输入番名" size='large' onSearch={value => this.props.searchComic(value)} enterButton />
			</div>
		)
	}
	success() {
		message.success('查询成功');
	}
	warning() {
		message.warning('未找到相关数据');
	}
}

const mapState = state => ({
	comic: state.comicReducer.comic
})

const mapDispatch = dispatch => ({
	searchComic(value) {
		state = true;
		const action = searchComic(value);
		dispatch(action);
	}
})

export default connect(mapState,mapDispatch)(withRouter(Search))