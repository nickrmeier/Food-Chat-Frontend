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
		max-height: 600px;
		max-width: 600px;
		margin: 0 auto;
        float: none; 
		margin-bottom: 10px;
		font-family: 'Quicksand', sans-serif;	
		font-size: 21px;
	}

	.title {
		font-size: 40px;
		font-style: bold;
		background-color: rgba(247, 255, 253);
	}

	.image {
	height: 375px;
	width: auto;
		@media (max-width: 576px) 
		{ 
		height: 225px;
		}
	}

	.button {
		width: 125px;
		@media (max-width: 576px) 
			{ 
			width: 100%;
			}
		background-color: rgba(66, 170, 245);
		font-size: 20px;	
	}
	.button:hover {
  		background-color: rgba(34, 72, 99);
	}
	.button:active {
		background-color: rgba(34, 72, 99);
	}	
`;

export const CityRes = (props) => {
	const restaurantList = props.cityRestaurants.map((restaurant) => {
		return (
			<Styles key={restaurant._id}>
				<CardDeck>
					<Card >
						<Card.Header className="title">{restaurant.name}</Card.Header>
						<Card.Img variant='top' src={restaurant.image} className="image"></Card.Img>

						<Card.Body>
							<Card.Text>{restaurant.address}</Card.Text>
							<LinkContainer to={`/restaurant/${restaurant.name}`}>
								<Button name={restaurant.name} onClick={props.handleViewClick} className="button">
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
