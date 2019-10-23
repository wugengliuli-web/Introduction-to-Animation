import React, {
	Component
} from 'react';
import { Link } from 'react-router-dom'
class Record extends Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<div className="record">
				<div><a href="http://www.beian.miit.gov.cn/" target="_Blank">蜀ICP备19020651号</a></div>
				<div><Link to="/home/homePage">联系站长QQ:572471221 phone:15681173138</Link></div>
			</div>
		)
	}
}

export default Record;