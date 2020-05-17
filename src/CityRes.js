import React from 'react';
import { Card, CardDeck, Button } from 'react-bootstrap';

export const CityRes = (props) => {
	const restaurantList = props.cityRestaurants.map((restaurant) => {
		return (
			<CardDeck key={restaurant._id}>
				<Card>
        <Card.Header>{restaurant.name}</Card.Header>
        <Card.Body>{restaurant.address}</Card.Body>
                </Card>
			</CardDeck>
		);
    });
return <div>{restaurantList}</div>
};
