import React from 'react';
import { Card } from 'react-bootstrap';
import { SideNav } from './Sidebar';
import { AllPosts } from './Posts';
import styled from 'styled-components';
import { withRouter } from 'react-router';
import axios from 'axios';

const Styles = styled.div`

	font-family: 'Quicksand', sans-serif;

	.card {
		margin-top: 25px;
		@media (max-width: 576px) { 
				margin-top: 15px;
				}
		font-size: 28px;
		background-color: rgba(247, 255, 253);
	}	
`;

class RestaurantPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title: '',
			summary: '',
			revisit: '',
			show: false,
			posts: '',
			redirect: false
		};
	}

	handleRedirect = () => {
		this.setState({ redirect: true })
	}

	componentDidMount() {
		const url = 'https://afternoon-woodland-50465.herokuapp.com/api/post';
		axios.get(`${url}/${this.props.restaurant._id}`).then((res) => {
			const allPosts = res.data;
			this.setState({ posts: allPosts });
			console.log(allPosts);
		});
	}

	componentDidUpdate() {
		const url = 'https://afternoon-woodland-50465.herokuapp.com/api/post';
		axios.get(`${url}/${this.props.restaurant._id}`).then((res) => {
			const allPosts = res.data;
			this.setState({ posts: allPosts, redirect: false });
			console.log(allPosts);
		});
	}

	handleShow = () => {
		this.setState({ show: true });
	};

	handleClose = () => {
		this.setState({ show: false });
	};
	

	handlePostClick = (event, data) => {
		const url = 'https://afternoon-woodland-50465.herokuapp.com/api/post';
		axios
			.post(
				`${url}/${this.props.restaurant._id}`,
				{ ...data }
			)
			.then((res) => {
				console.log(res);
				this.handleRedirect();
			});
			// this.props.history.push(`/restaurant/${this.props.restaurant.name}`);
	};

	handleEditClick = (event, data) => {
		const url = 'https://afternoon-woodland-50465.herokuapp.com/api/post';
		axios
			.put(`${url}/${event.target.id}`, { ...data })
			.then((res) => {
				console.log(res);
				this.handleRedirect();
			});
		this.setState({ show: false })
		// this.props.history.push(`/restaurant/${this.props.restaurant.name}`);
	};

	handleDeleteClick = (event) => {
		const url = 'https://afternoon-woodland-50465.herokuapp.com/api/post';
		axios.delete(`${url}/${event.target.id}`).then(res => { 
			console.log(res); 
			this.handleRedirect();
		})
		this.setState({ show: false })
		// this.props.history.push(`/restaurant/${this.props.restaurant.name}`);
	}

	render() {
		if (!this.state.posts) {
			return null
		}
		return (
			<>
				<Styles>
					<Card>
						<Card.Header className='restaurant-name'>
							{this.props.restaurant.name}
						</Card.Header>
					</Card>{' '}
					{/* <div className='restaurant-review'> */}
						{this.state.posts.map((post, index) => {
							return (
								<AllPosts
									post={post}
									restaurant={this.props.restaurant}
									show={this.state.show}
									handleEditClick={this.handleEditClick}
									handleDeleteClick={this.handleDeleteClick}
								/>
							);
						})}
						<SideNav
							handlePostClick={this.handlePostClick}
							revisit={this.state.revisit}
							title={this.state.title}
							summary={this.state.summary}
						/>
					
				</Styles>
			</>
		);
	}
}

export default withRouter(RestaurantPage);
