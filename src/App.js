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
import { RestaurantPage } from './Restaurant';
import axios from 'axios';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			restaurants: '',
			cityres: '',
		};
	}
	componentDidMount() {
		const url = 'http://localhost:4000';
		axios.get(`${url}/restaurants`).then((res) => {
			const rest = res.data;
			this.setState({ restaurants: rest });
		});
	}

	handleClick = (event) => {
		const filteredRestaurants = this.state.restaurants.filter( restaurant => restaurant.city.split(" ").join("").includes(event.target.name))
		this.setState({ cityres: filteredRestaurants });
		console.log(event.target.name)
	}

	handleViewClick = (event) => {
		const filteredRestaurants = this.state.cityres.filter( restaurant => restaurant.name.includes(event.target.name))	
		this.setState({cityres: filteredRestaurants });

	}

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
								render={() => {
									console.log(this.state.cityres)
									return <RestaurantPage restaurant={this.state.cityres}/>
								}}
							/>
							<Route
								exact
								path='/restaurants/:city'
								render={(routerProps) => {
									if (!this.state.restaurants || !this.state.cityres) {
										return null;
									}
									console.log(this.state.cityres);
									return (
										<CityRes
											cityRestaurants={this.state.cityres}
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
