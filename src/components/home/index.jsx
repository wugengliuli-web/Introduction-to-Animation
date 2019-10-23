import React,{
	Component
} from 'react'
import Nav from './components/nav/nav.jsx'
import './index.css'
import {
	Route
} from 'react-router-dom'
import HomePage from './components/homePage/homePage.jsx'
import AllComic from './components/allComic/allComic.jsx'
import Introduce from './components/introduce/introduce.jsx'
import Video from './components/video/video.jsx'
class Home extends Component {
	constructor(props) {
		super(props)
		this.setSize();
	}
	render() {
		return (
			<div className="home">
				<Nav />
				<Route path='/home/homePage' component={HomePage} />
				<Route path='/home/allComic' component={AllComic} />
				<Route path='/home/introduce' component={Introduce} />
				<Route path='/home/video' component={Video} />
			</div>
		)
	}
	setSize() {
		var width = window.innerWidth;
		//设置页面最大宽度
		/*	if (width > 600) {
			width = 600
		}*/
		// 获取默认fontsize
		var fontSize = parseFloat(window.getComputedStyle(document.documentElement).fontSize) || 16;
		var x = width * 16 / (20 * fontSize);
		document.documentElement.style.fontSize = x + 'px';
	}
}

export default Home