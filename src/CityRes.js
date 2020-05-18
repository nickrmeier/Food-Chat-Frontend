import React from 'react';
import { Card, CardDeck, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
	.card-deck {
		padding-top: 35px;
	}

	.card {
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
	
	}
`;

export const CityRes = (props) => {
	const restaurantList = props.cityRestaurants.map((restaurant) => {
		return (
			<Styles key={restaurant._id}>
				<CardDeck>
					<Card >
						<Card.Header>{restaurant.name}</Card.Header>
						<Card.Img variant='top' src={restaurant.image}></Card.Img>

						<Card.Body>
							<Card.Text>{restaurant.address}</Card.Text>
							<LinkContainer to={`/restaurant/${restaurant.name}`}>
								<Button name={restaurant.name} onClick={props.handleViewClick}>
									View
								</Button>
							</LinkContainer>
						</Card.Body>
					</Card>
				</CardDeck>
			</Styles>
		);
	});
	return <div>{restaurantList}</div>;
};
