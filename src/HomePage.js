import React from 'react';
import { Card, Button, CardDeck } from 'react-bootstrap';
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
					<Button value="LosAngeles" href='/'>Los Angeles</Button>
				</Card.Body>
			</Card>

			<Card className='text-center cities'>
				<Card.Body>
					<Button value="Austin">Austin</Button>
				</Card.Body>
			</Card>

			<Card className='text-center cities'>
				<Card.Body>
					<Button value="NewYork">New York</Button>
				</Card.Body>
			</Card>
		</CardDeck>
	</Styles>
);
