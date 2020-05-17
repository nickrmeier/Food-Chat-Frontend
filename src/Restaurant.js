import React from 'react';
import { Card } from 'react-bootstrap';
import { SideNav } from './Sidebar';

export const RestaurantPage = (props) => (
	<>
		<Card>
			<Card.Header>{props.restaurant[0].name}</Card.Header>
		</Card>{' '}
		<SideNav />
	</>
);
