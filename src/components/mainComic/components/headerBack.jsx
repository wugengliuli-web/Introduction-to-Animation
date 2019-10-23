import React, {
	Component
} from 'react'
import { Breadcrumb } from 'antd';
import { Link } from 'react-router-dom'
class HeaderBack extends Component {
	render() {
		return (
			<header>
				<div className="headerWrapper">
					<Breadcrumb>
						<Breadcrumb.Item>
					   		<Link to="/home/homePage">
					   			home
					   		</Link>
					   	</Breadcrumb.Item>
					   	<Breadcrumb.Item>
					   		<Link to="/home/allComic">
					   			{this.props.comic.comic.name}
					   		</Link>
					   	</Breadcrumb.Item>
					</Breadcrumb>
				</div>
			</header>
		)
	}
}

export default HeaderBack;