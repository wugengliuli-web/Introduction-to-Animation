import React,{
	Component
} from 'react'
import HomePageBanner from './components/homePageBanner.jsx'
import Search from './components/search.jsx'
import Recommend from './components/recommend.jsx'
import Record from './components/record.jsx'
class HomePage extends Component {
	render() {
		return (
			<div className="homePage">
				<HomePageBanner />
				<Search />
				<Recommend />
				<Record />
			</div>
		)
	}
}

export default HomePage