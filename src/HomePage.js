import React from 'react';
import { Card, Button, CardDeck } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
	.card-deck {
		margin: ;
	}
	.cities {
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
	}
`;

export const Home = (props) => (
					<Styles>
						<CardDeck className='align-items-center'>
							<Card className='text-center cities'>
								<Card.Body>
									<LinkContainer to={`/restaurants/Los Angeles`}>
										<Button name={'LosAngeles'} onClick={props.handleClick}>
											Los Angeles
										</Button>
									</LinkContainer>
								</Card.Body>
							</Card>

							<Card className='text-center cities'>
								<Card.Body>
									<LinkContainer to={`/restaurants/Austin`}>
										<Button name='Austin' onClick={props.handleClick}>
											Austin
										</Button>
									</LinkContainer>
								</Card.Body>
							</Card>

							<Card className='text-center cities'>
								<Card.Body>
									<LinkContainer to={`/restaurants/New York`}>
										<Button name='NewYork' onClick={props.handleClick}>
											New York
										</Button>
									</LinkContainer>
								</Card.Body>
							</Card>
						</CardDeck>
					</Styles>
				);
