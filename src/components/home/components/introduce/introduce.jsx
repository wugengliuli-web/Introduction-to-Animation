import React, {
	Component
} from 'react'
import IntroduceBanner from './components/introduceBanner.jsx'
import Timer from './components/timer.jsx'
class Introduce extends Component {
	render() {
		return (
			<div className="introduceWrapper">
				<IntroduceBanner />
				<Timer />
			</div>
		)
	}
}

export default Introduce;