import React, {
	Component
} from 'react';
import { Timeline, Spin } from 'antd';
import { connect } from 'react-redux'
import { getTimeLine } from '../../../store/homeAction.js'
class Timer extends Component {
	componentDidMount() {
		if(this.props.timeLine.code !== 1) this.props.getTimeLine();
	}
	render() {
		return (
			<div className="timerWrapper">
				{
					this.props.timeLine.code === 1?
					<Timeline>
						{
							this.props.timeLine.timeLine.map((v,i) => (
								 <Timeline.Item key={i}>{v}</Timeline.Item>
							))
						}
				 	</Timeline>
				 	:
					<div className="load">
						<Spin size='large' />
					</div>
				}
			</div>
		)
	}
}

const mapState =  state => ({
	timeLine: state.homeReducer.timeLine
})

const mapDispatch = dispatch => ({
	getTimeLine() {
		const action = getTimeLine();
		dispatch(action);
	}
})

export default connect(mapState,mapDispatch)(Timer);