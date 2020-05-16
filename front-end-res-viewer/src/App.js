import React from 'react';
import './App.css';
import { NavigationBar } from './NavBar';
import { Home } from './HomePage';
import { Layout } from './Layout';

class App extends React.Component {
	render() {
		return (
			<React.Fragment>
				<NavigationBar />
				<Layout>
					<Home />
				</Layout>
			</React.Fragment>
		);
	}
}

export default App;
