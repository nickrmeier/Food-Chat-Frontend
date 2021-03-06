import React from 'react';
import { Card, Button, CardDeck } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
	.card-deck {
		margin-top: 200px;
		@media (max-width: 576px) { 
			margin-top: 15px;
		 }	
	}
	.cities {
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
		height: 180px;
		font-family: 'Quicksand', sans-serif;
	}
	.city {
		margin-top: 45px;
		height: 50px;
		font-size: 25px;
	}
	.new-york {
		background-image: url('https://i.imgur.com/vnsmHUx.jpg');
		background-repeat: no-repeat;
		background-size: cover;
	}
	.austin {
		background-image: url('https://i.imgur.com/gZ0J4i0.jpg');
		background-repeat: no-repeat;
		background-size: cover;
	}
	.los-angeles {
		background-image: url('https://i.imgur.com/JM64K7V.jpg');
		background-repeat: no-repeat;
		background-size: cover;
	}
`;

export const Home = (props) => (
					<Styles>
						<CardDeck className='align-items-center'>
							<Card className='text-center cities los-angeles'>
								<Card.Body>
									<LinkContainer to={`/restaurants/Los Angeles`}>
										<Button
											variant='outline-light'
											name={'LosAngeles'}
											onClick={props.handleClick}
											className='city'>
											Los Angeles
										</Button>
									</LinkContainer>
								</Card.Body>
							</Card>

							<Card className='text-center cities austin'>
								<Card.Body>
									<LinkContainer to={`/restaurants/Austin`}>
										<Button
											variant='outline-light'
											name='Austin'
											onClick={props.handleClick}
											className='city'>
											Austin
										</Button>
									</LinkContainer>
								</Card.Body>
							</Card>

							<Card className='text-center cities new-york'>
								<Card.Body>
									<LinkContainer to={`/restaurants/New York`}>
										<Button
											variant='outline-light'
											name='NewYork'
											onClick={props.handleClick}
											className='city'>
											New York
										</Button>
									</LinkContainer>
								</Card.Body>
							</Card>
						</CardDeck>
					</Styles>
				);
