import React, {
	Component
} from 'react'
import { connect } from 'react-redux';
import { getBannerImgArray } from '../../../store/homeAction.js';
import { Spin } from 'antd';
import loadImg from '../../../mock/bannerImgs/loading.png'
class IntroduceBanner extends Component {
	constructor(props) {
		super(props);
		this.state = {
			index: 0,
			isShow: [],
			interval: null
		}
		this.loadSuccess = this.loadSuccess.bind(this);
		this.indexNext = this.indexNext.bind(this);
		this.indexPrve = this.indexPrve.bind(this);
		this.setInterval = this.setInterval.bind(this);
		this.clearInterval = this.clearInterval.bind(this);
		this.changeIndex = this.changeIndex.bind(this);
	}
	componentDidMount() {
		if (this.props.bannerImgArray.code !== 1) this.props.getImgArray();
		this.setInterval();
	}
	componentWillReceiveProps(nextProps){
		let isShow = [];
		nextProps.bannerImgArray.bannerImg.forEach((v,i) => {
			isShow.push(false);
		})
		this.setState({
			isShow
		})
	}
	componentWillUnmount() {
		this.clearInterval();
	}
	render() {
		return (
			<div className="IntroduceBannerWrapper">
				{
					this.props.bannerImgArray.code === 1?
					<div className="bannerWrapper" onMouseOver={this.clearInterval} onMouseOut={this.setInterval}>
						<ul className="img">
							{
								this.props.bannerImgArray.bannerImg.map((v,i) => (
									<li key={i} className={this.state.index === i? 'active':''}>
										<img src={loadImg} alt="i" className={this.state.isShow[i] === false? 'on':''} />
										<img data-index={i} src={v} alt="i" onLoad={(e) => {this.loadSuccess(e)}} className={this.state.isShow[i] === true? 'on':''} />
									</li>
								))
							}
						</ul>
						<div className="next" onClick={this.indexNext}>
							<i></i>
							<span></span>
						</div>
						<div className="prve" onClick={this.indexPrve}>
							<i></i>
							<span></span>
						</div>
						<div className="btns">
							<ul style={{width:this.props.bannerImgArray.bannerImg.length * 30 + 'px'}}>
								{
									this.props.bannerImgArray.bannerImg.map((v,i) => (
										<li onClick={this.changeIndex}  onMouseOver={this.changeIndex}  key={i} data-index={i} className={this.state.index === i? 'on':''}></li>
									))
								}
							</ul>
						</div>
					</div>
					:
					<div className="loading">
						<Spin size="large" />
					</div>
				}
			</div>
		)
	}
	setInterval() {
		this.setState({
			interval: setInterval(() => {
				this.indexNext();
			},3000)
		})
	}
	clearInterval() {
		clearInterval(this.state.interval)
	}
	changeIndex(e) {
		this.setState({
			index: parseInt(e.currentTarget.getAttribute('data-index'))
		})
	}
	loadSuccess(e) {
		let isShow = this.state.isShow;
		isShow[parseInt(e.target.getAttribute('data-index'))] = true;
		this.setState({
			isShow
		})
	}
	indexNext() {
		let newIndex = this.state.index + 1;
		if(newIndex === this.props.bannerImgArray.bannerImg.length) newIndex = 0;
		this.setState(() => ({
			index: newIndex
		}))
	}
	indexPrve() {
		let newIndex = this.state.index - 1;
		if(newIndex < 0) newIndex = this.props.bannerImgArray.bannerImg.length - 1;
		this.setState(() => ({
			index: newIndex
		}))
	}
}

const mapState = state => ({
	bannerImgArray: state.homeReducer.bannerImgArray
})

const mapDispatch = dispatch => ({
	getImgArray() {
		const action = getBannerImgArray();
		dispatch(action);
	}
})

export default connect(mapState, mapDispatch)(IntroduceBanner);