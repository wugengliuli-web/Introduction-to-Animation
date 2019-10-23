import React,{
	Component
} from 'react';
import { Tag, Button } from 'antd';
class Comic extends Component {
	render() {
		return (
			<div className="comic">
				<div className="imgWraper">
					<img src={this.props.comic.comic.img} alt="i"/>
				</div>
				<div className="contentWrapper">
					<div className="content">
						<h1>
							{this.props.comic.comic.name}
							{
								this.props.comic.comic.isHot?
								<Tag color="#f50">HOT</Tag>
								:
								null
							}
							{
								this.props.comic.comic.isEnd?
								<Tag color="#108ee9">已完结</Tag>
								:
								null
							}
						</h1>
						<h2>
							类型
							{
								this.props.comic.comic.types.map((v,i) => (
									<Tag color="#2db7f5" key={i}>{v}</Tag>
								))
							}
						</h2>
						<h3>
							{ this.props.comic.comic.introduce }
						</h3>
						<h4>
							<a href={this.props.comic.comic.Link} target="_Blank">
								<Button type="primary" size='large'>
						          点击观看
						        </Button>
							</a>
						</h4>
					</div>
				</div>
			</div>
		)
	}
}

export default Comic