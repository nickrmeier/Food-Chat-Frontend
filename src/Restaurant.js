import React from 'react';
import { Card } from 'react-bootstrap';
import { SideNav } from './Sidebar';
import { AllPosts } from './Posts';
import styled from 'styled-components';
import { withRouter } from 'react-router';
import axios from 'axios';

const Styles = styled.div`
	font-family: 'Quicksand', sans-serif;

	.restaurant-name {
		font-family: 'Quicksand', sans-serif;
		font-size: 32px;
	}

	.restaurant-address {
		font-family: 'Quicksand', sans-serif;
		text-align: center;
		font-size: 21px;
	}

	.card {
		margin-top: 25px;
		font-size: 27px;
		@media (max-width: 768px) {
			margin-top: 15px;
			margin-bottom: 15px;
			font-size: 20px;
		}
		background-color: rgba(247, 255, 253);
	}

	.content {
		@media (max-width: 768px) {
			display: flex; 
			flex-direction: column;
		}
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
			redirect: false,
		};
	}

	handleRedirect = () => {
		this.setState({ redirect: true });
	};

	componentDidMount() {
		const url = 'https://afternoon-woodland-50465.herokuapp.com/api/post';
		axios.get(`${url}/${this.props.restaurant._id}`).then((res) => {
			const allPosts = res.data;
			this.setState({ posts: allPosts });
		});
	}

	componentDidUpdate() {
		
		const url = 'https://afternoon-woodland-50465.herokuapp.com/api/post';
		if(this.state.redirect === true ) {
			axios.get(`${url}/${this.props.restaurant._id}`).then((res) => {
			const allPosts = res.data;
			this.setState({ posts: allPosts, redirect: false });
		});
		}
		
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
			.post(`${url}/${this.props.restaurant._id}`, { ...data })
			.then((res) => {
			
				this.handleRedirect();
			});
	
	};

	handleEditClick = (event, data) => {
		const url = 'https://afternoon-woodland-50465.herokuapp.com/api/post';
		axios.put(`${url}/${event.target.id}`, { ...data }).then((res) => {
		
			this.handleRedirect();
		});
		this.setState({ show: false });
	
	};

	handleDeleteClick = (event) => {
		const url = 'https://afternoon-woodland-50465.herokuapp.com/api/post';
		axios.delete(`${url}/${event.target.id}`).then((res) => {
		
			this.handleRedirect();
		});
		this.setState({ show: false });
	
	};

	render() {
		if (!this.state.posts) {
			return null;
		}
		return (
			<>
				<Styles>
					<Card>
						<Card.Header className='restaurant-name'>
							{this.props.restaurant.name}
						</Card.Header>
						<Card.Header className='restaurant-address'>
							{this.props.restaurant.address}
						</Card.Header>
					</Card>{' '}
					<div className='content' >
						{this.state.posts.map((post, index) => {
							return (
								<AllPosts
									key={post._id}
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
					</div>
				</Styles>
			</>
		);
	}
}

export default withRouter(RestaurantPage);
