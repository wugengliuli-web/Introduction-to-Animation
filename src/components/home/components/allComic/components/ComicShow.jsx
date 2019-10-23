import React, {
	Component
} from 'react';
import { Icon, Divider, Pagination, Spin  } from 'antd'
import { connect } from 'react-redux';
import { getAllComic } from '../../../store/homeAction.js';
import { Link } from 'react-router-dom';
import { CLEAT_COMIC } from '../../../store/homeActionTypes.js';
import { getComic } from '../../../../mainComic/store/comicAction.js';
class ComicShow extends Component {
	componentDidMount() {
		if(this.props.allComic.code !== 1) this.props.getAllComic(0);
	}
	render() {
		return (
			<div className="ComicShowWrapper">
				<p><Icon type="tags" theme="twoTone" />全部作品</p>
				<Divider />
				<div className="showWrapper">
					<div className="show">
						<ul>
							{
								this.props.allComic.code === 1?
								this.props.allComic.allComic.map((v,i) => (
									<li key={i}>
										<Link to={this.props.allComic.Link} data-index={v.id} onClick={(e) => {this.props.getComic(e)}}>
											<img src={v.img} alt={v.name}/>
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
					<div className="list">
						{	
							this.props.allComic.code === 1?
							<Pagination onChange={ (index,pageSize) => { this.props.getAllComic(index-1) } }  defaultCurrent={1} total={this.props.allComic.allLength * 9} />
							:
							null
						}
					</div>
				</div>
			</div>
		)
	}
}

const mapState = (state) => {
	return {
		allComic: state.homeReducer.allComic
	}
}

const mapDispatch = (dispatch) => {
	return {
		getAllComic(index) {
			const action = getAllComic(index);
			dispatch(action);
		},
		getComic(e) {
			let index = e.currentTarget.getAttribute('data-index')
			const action = getComic(index);
			dispatch(action)
		},
		clearComic() {
			const action = {
				type: CLEAT_COMIC
			}
			dispatch(action);
		}
	}
}

export default connect(mapState,mapDispatch)(ComicShow);