import React,{
	PureComponent
} from 'react';
import {
	Provider
} from 'react-redux'
import store from './store/index.js'
import {
	HashRouter as Router,
	Route,
	Switch,
	Redirect
} from 'react-router-dom'
import Home from './components/home/index.jsx'
import ComicMain from './components/mainComic/index.jsx';
import 'antd/dist/antd.css'
class App extends PureComponent {
	render() {
		return (
			<Provider store={store}>
				<Router>
					<Switch>
						<Route path='/home' component={Home} />
						<Route path='/comic' component={ComicMain} />
						<Redirect to='/home/homePage' />
					</Switch>
				</Router>
			</Provider>
		)
	}
}

export default App;