import React, {
	Component
} from 'react'
import { Input,Checkbox,Spin } from 'antd';
import { connect } from 'react-redux'
import { CHANGE_CHECKEDTAGARRAY } from '../../../store/homeActionTypes.js'
import { getTagArray, searchName, searchTypes } from '../../../store/homeAction.js'
import { CLEAT_COMIC } from '../../../store/homeActionTypes.js';
class Search extends Component {
	constructor(props) {
		super(props);
		this.pushPopTag = this.pushPopTag.bind(this)
	}
	componentDidMount() {
		if(this.props.tagArray.code !== 1) {
			this.props.getTagArray();
		}
		else {
			this.props.searchName('');
		}
	}
	render() {
		return (
			<div className="searchWrapper">
				<div className="search">
					<Input.Search placeholder="输入番剧名" onChange={(e) => { this.props.searchName(e.currentTarget.value);e.persist() }} onSearch={value => this.props.search(value)}  enterButton />
				</div>
				<div className="tag">
					{
						this.props.tagArray.code === 1?
						this.props.tagArray.tagArray.map((v,i) => (
							<Checkbox onChange={null} key={i} onChange={ e => this.pushPopTag(e) }>{v}</Checkbox>
						))
						:
						<Spin />
					}
				</div>
			</div>
		)
	}
	pushPopTag(e) {
		this.props.clearComic();
		let newTagArray = this.props.checkedTagArray;
		if(e.target.checked) {
			newTagArray.push(e.nativeEvent.path[2].children[1].innerHTML);
		} else {
			newTagArray.splice(newTagArray.indexOf(e.nativeEvent.path[2].children[1].innerHTML),1)
		}
		if(newTagArray.length === 0) {
			this.props.searchName('');
			this.props.changeCheckedTagArray([])
			return null;
		}
		this.props.searchTypes(newTagArray)
		this.props.changeCheckedTagArray(newTagArray)
	}
}

const mapState = (state) => {
	return {
		tagArray: state.homeReducer.tagArray,
		checkedTagArray: state.homeReducer.checkedTagArray
	}
}

const mapDispatch = (dispatch) => {
	return {
		getTagArray() {
			const action = getTagArray();
			dispatch(action);
		},
		searchName(value) {
			const action = searchName(value);
			dispatch(action)
		},
		searchTypes(types) {
			const action = searchTypes(types);
			dispatch(action)
		},
		changeCheckedTagArray(checkedTagArray) {
			const action = {
				type: CHANGE_CHECKEDTAGARRAY,
				checkedTagArray
			}
			dispatch(action);
		},
		clearComic() {
			const action = {
				type: CLEAT_COMIC
			}
			dispatch(action);
		}
	}
}

export default connect(mapState,mapDispatch)(Search);
