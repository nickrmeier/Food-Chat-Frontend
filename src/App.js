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
import axios from 'axios';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			restaurants: null,
			cityres: null,
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

	render() {
		return (
			<React.Fragment>
				<NavigationBar />
				<Layout>
					<Router>
						<Switch>
							<Route exact path='/' render={ () => {
								if (!this.state.restaurants) {
									return null;
								}
								return <Home restaurants={this.state.restaurants} handleClick={this.handleClick} />
							} } />
							<Route exact path='/restaurants/Austin' render={(routerProps) => {
								if(!this.state.restaurants || !this.state.cityres) {
									return null
								}
								console.log(this.state.cityres)
								return <CityRes cityRestaurants={this.state.cityres} match={routerProps.match}/>
							}} />
						</Switch>
					</Router>
				</Layout>
			</React.Fragment>
		);
	}
}

export default App;
