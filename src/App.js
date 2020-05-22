import React from 'react';
import './App.css';
import {
	BrowserRouter as Router,
	Route,
	Switch
} from 'react-router-dom';
import { NavigationBar } from './NavBar';
import { Home } from './HomePage';
import { Layout } from './Layout';
import { CityRes } from './CityRes';
import  RestaurantPage  from './Restaurant';
import axios from 'axios';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			restaurants: '',
			cityRestaurants: '',
			restaurant: '',
			title: '',
			summary: '',
			revisit: '',
		};
	}
	componentDidMount() {
		const url = 'https://afternoon-woodland-50465.herokuapp.com/api/restaurants';
		axios.get(`${url}`).then((res) => {
			const rest = res.data;
			this.setState({ restaurants: rest });
		});
	}
	

	handleClick = (event) => {
		const filteredRestaurants = this.state.restaurants.filter((restaurant) =>
			restaurant.city.split(' ').join('').includes(event.target.name)
		);
		this.setState({ cityRestaurants: filteredRestaurants });
		
	};

	handleViewClick = (event) => {
		const filteredRestaurants = this.state.cityRestaurants.find((restaurant) =>
			restaurant.name.includes(event.target.name)
		);
		this.setState({ restaurant: filteredRestaurants });
	};
	
	render() {
		return (
			<React.Fragment>
				<NavigationBar />
				<Layout>
					<Router>
						<Switch>
							<Route
								exact
								path='/'
								render={() => {
									if (!this.state.restaurants) {
										return null;
									}
									return (
										<Home
											restaurants={this.state.restaurants}
											handleClick={this.handleClick}
										/>
									);
								}}
							/>
							<Route
								exact
								path='/restaurant/:name'
								render={(routerProps) => {
									
									return (
										<RestaurantPage
											routerProps={routerProps}
											handleTitleChange={this.handleTitleChange}
											handleSummaryChange={this.handleSummaryChange}
											handleRevisitChange={this.handleRevisitChange}
											title={this.state.title}
											summary={this.state.summary}
											revisit={this.state.revisit}
											restaurant={this.state.restaurant}
										/>
									);
								}}
							/>
							<Route
								exact
								path='/restaurants/:city'
								render={(routerProps) => {
									if (!this.state.restaurants || !this.state.cityRestaurants) {
										return null;
									}
									
									return (
										<CityRes
											cityRestaurants={this.state.cityRestaurants}
											handleViewClick={this.handleViewClick}
											match={routerProps.match}
										/>
									);
								}}
							/>
						</Switch>
					</Router>
				</Layout>
			</React.Fragment>
		);
	}
}

export default App;
