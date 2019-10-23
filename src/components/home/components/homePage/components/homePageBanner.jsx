import React,{
	Component
} from 'react'
import BannerAnim, { Element } from 'rc-banner-anim';
import TweenOne from 'rc-tween-one';
import 'rc-banner-anim/assets/index.css';
import {
	connect
} from 'react-redux'
import {
	getHomePageBannerTitle
} from '../../../store/homeAction.js'
import { Spin } from 'antd';
const BgElement = Element.BgElement;
class HomePageBanner extends Component {
	componentDidMount() {
		if(this.props.homePageBannerTitle.code !== 1)
		this.props.getHomePageBannerTitle();
	}
	render() {
		return (
			<div className="homePageBanner">
				{
					this.props.homePageBannerTitle.code === 1?
					<BannerAnim prefixCls="banner-user" autoPlay>
				        <Element 
				          prefixCls="banner-user-elem"
				          key="0"
				        >
				          <BgElement
				            key="bg"
				            className="bg"
				            style={{
				              background: '#364D79',
				            }}
				          />
				          <TweenOne className="banner-user-title" animation={{ y: 30, opacity: 0, type: 'from' }}>
				            { this.props.homePageBannerTitle.title[0].bigTitle }
				          </TweenOne>
				          <TweenOne className="banner-user-text" 
				            animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}
				          >
				             { this.props.homePageBannerTitle.title[0].smallTitle }
				          </TweenOne>
				        </Element>
				        <Element 
				          prefixCls="banner-user-elem"
				          key="1" 
				        >
				          <BgElement
				            key="bg"
				            className="bg"
				            style={{
				              background: '#64CBCC',
				            }}
				          />
				          <TweenOne className="banner-user-title" animation={{ y: 30, opacity: 0, type: 'from' }}>
				             { this.props.homePageBannerTitle.title[1].bigTitle }
				          </TweenOne>
				          <TweenOne className="banner-user-text" 
				            animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}
				          >
				             { this.props.homePageBannerTitle.title[1].smallTitle }
				          </TweenOne>
				        </Element>
				     </BannerAnim>
				     :
				     <Spin size="large" />
				}
			</div>
		)
	}
}

const mapState = (state) => {
	return {
		homePageBannerTitle: state.homeReducer.homePageBannerTitle
	}
}

const mapDispatch = (dispatch) => {
	return {
		getHomePageBannerTitle: function() {
			const action = getHomePageBannerTitle();
			dispatch(action)
		}
	}
}

export default connect(mapState,mapDispatch)(HomePageBanner)