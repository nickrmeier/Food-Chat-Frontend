import React from 'react';
import { Card } from 'react-bootstrap';
import { SideNav } from './Sidebar';
import { AllPosts } from './Posts';
import axios from 'axios';

class RestaurantPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title: '',
			summary: '',
			revisit: '',
			newTitle: '',
			newSummary:'',
			newRevisit: '',
			show: false,
			posts: '',
		};
	}

	componentDidMount() {
		const url = 'http://localhost:4000';
		axios.get(`${url}/api/post/${this.props.restaurant[0]._id}`).then((res) => {
			const allPosts = res.data;
			this.setState({ posts: allPosts });
			console.log(allPosts);
		});
	}

	handleShow = () => {
		this.setState({ show: true });
	};

	handleClose = () => {
		this.setState({ show: false });
	};
	handleTitleChange = (event) => {
		if (event.target.name){
			this.setState({ newTitle: event.target.value })
		} else {
			this.setState({ title: event.target.value });
		}
	};
	handleSummaryChange = (event) => {
	if (event.target.name) {
		this.setState({ newSummary: event.target.value });
	} else {
		this.setState({ summary: event.target.value });
	}
	};
	handleRevisitChange = (event) => {
		if (event.target.name) {
			this.setState({ newRevisit: event.target.value });
		} else {
			this.setState({ revisit: event.target.value });
		}
	};

	handlePostClick = (props) => {
		const url = 'http://localhost:4000';
		axios
			.post(
				`${url}/api/post/${this.props.restaurant[0]._id}`,
				{
					title: this.state.title,
					summary: this.state.summary,
					revisit: this.state.revisit,
				}
			)
			.then((res) => {
				console.log(res);
			});
	};

	handleEditClick = (event) => {
		const url = 'http://localhost:4000/restaurant/post';
		axios
			.put(`${url}/${event.target.name}`, {
				title: this.state.newTitle,
				summary: this.state.newSummary,
				revisit: this.state.newRevisit,
			})
			.then((res) => {
				console.log(res);
			});
			this.setState({ show: false })
	};

	handleDeleteClick =(event) => {
	const url = 'http://localhost:4000/restaurant/post';
	axios.delete(`${url}/${event.target.name}`).then(res => {console.log(res)})
	this.setState({show: false})
	}

	render(props) {
		return (
			<>
				<Card>
					<Card.Header className='restaurant-name'>
						{this.props.restaurant[0].name}
					</Card.Header>
				</Card>{' '}
				<div className='restaurant-review'>
					<SideNav
						handleTitleChange={this.handleTitleChange}
						handleSummaryChange={this.handleSummaryChange}
						handleRevisitChange={this.handleRevisitChange}
						handlePostClick={this.handlePostClick}
						revisit={this.state.revisit}
						title={this.state.title}
						summary={this.state.summary}
					/>
					<AllPosts
						posts={this.state.posts}
						restaurant={this.props.restaurant[0]}
						show={this.state.show}
						handleShow={this.handleShow}
						handleClose={this.handleClose}
						revisit={this.state.newRevisit}
						title={this.state.newTitle}
						summary={this.state.newSummary}
						handleTitleChange={this.handleTitleChange}
						handleSummaryChange={this.handleSummaryChange}
						handleRevisitChange={this.handleRevisitChange}
						handleEditClick={this.handleEditClick}
						handleDeleteClick={this.handleDeleteClick}
					/>
				</div>
			</>
		);
	}
}

export default RestaurantPage;
