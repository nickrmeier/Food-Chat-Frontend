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
		};
	}

	handleTitleChange = (event) => {
		this.setState({ title: event.target.value });
	};
	handleSummaryChange = (event) => {
		this.setState({ summary: event.target.value });
	};
	handleRevisitChange = (event) => {
		this.setState({ revisit: event.target.value });
	};

	handlePostClick = (props) => {
		const url = 'http://localhost:4000';
		axios
			.post(
				`${url}/restaurant/post/${this.props.routerProps.match.params.name}`,
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

	render(props) {
		return (
			<>
				<Card>
					<Card.Header>{this.props.restaurant[0].name}</Card.Header>
				</Card>{' '}
				<SideNav
					handleTitleChange={this.handleTitleChange}
					handleSummaryChange={this.handleSummaryChange}
					handleRevisitChange={this.handleRevisitChange}
					handlePostClick={this.handlePostClick}
					revisit={this.state.revisit}
					title={this.state.title}
					summary={this.state.summary}
				/>
				<AllPosts restaurant={this.props.restaurant[0]}/>
			</>
		);
	}
}

export default RestaurantPage;
