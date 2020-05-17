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
		const filteredRestaurants = this.state.restaurants.filter( restaurant => restaurant.name.split(" ").join("").includes(event.target.value))
		this.setState({ cityres: filteredRestaurants });
	}

	render() {
		return (
			<React.Fragment>
				<NavigationBar />
				<Layout>
					<Router>
						<Switch>
							<Route path='/' render={ () => {
								if (!this.state.restaurants){
									return null;
								}
								console.log(this.state.restaurants);
								return <Home restaurants={this.state.restaurants}/>
							} } />
							<Route path='/restaurants/:city' render={(routerProps) => {
								if(!this.state.restaurants || !this.state.cityres) {
									return null
								}
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
