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
import CityRes from './CityRes';
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
		axios.get(`${url}/Austin`).then((res) => {
			const restaurants = res.data;
			this.setState({ city: restaurants });
		});
	}
	render() {
		return (
			<React.Fragment>
				<NavigationBar />
				<Layout>
					<Router>
						<Switch>
							<Route path='/' component={Home} />
							<Route path='/restaurants/Austin' component={CityRes} />
						</Switch>
					</Router>
				</Layout>
			</React.Fragment>
		);
	}
}

export default App;
