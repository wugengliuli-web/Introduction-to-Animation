import React, {
	Component
} from 'react'
import {
	connect
} from 'react-redux'
import {
	getNavList
} from '../../store/homeAction.js'
import {
	Icon,
	Spin
} from 'antd'
import {
	Link
} from 'react-router-dom'
//导航组件
class Nav extends Component {
	componentDidMount() {
		this.props.getNavList()
	}
	render() {
		return (
			<header>
				<div className="wrapper">
					<div className="logo"></div>
					<nav>
						<ul>
							{
								this.props.navList.code === 1?
								this.props.navList.navArray.map((v,i) => (
									<li key={i}>
										<Link to={v.Link}>
											<div>
												<Icon type={v.icon} />
											</div>
											<p>{v.name}</p>
										</Link>
									</li>
								))
								:
								<ul>
									<Spin size='large' />
								</ul>
							}
						</ul>
					</nav>
				</div>
			</header>
		)
	}
}

const mapState = (state) => {
	return {
		navList: state.homeReducer.navList
	}
}

const mapDispath = (dispatch) => {
	return {
		getNavList:function() {
			const action = getNavList();
			dispatch(action)
		}
	}
}

export default connect(mapState,mapDispath)(Nav)