import React,{
	Component
} from 'react'
import Search from './components/Search.jsx'
import ComicShow from './components/ComicShow.jsx'
class AllComic extends Component {
	render() {
		return (
			<div className="allComic">
				<Search />
				<ComicShow />
			</div>
		)
	}
}

export default AllComic