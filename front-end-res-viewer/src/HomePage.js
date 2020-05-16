import React from 'react';
import { Card, Button, CardDeck, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
	.card-deck {
        margin: center;
	}
	.cities {
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
	}
`;

export const Home = () => (
	<Styles>
		<CardDeck className='align-items-center'>
			<Card className='text-center cities'>
				<Card.Body>
					<Button>Los Angeles</Button>
				</Card.Body>
			</Card>

			<Card className='text-center cities'>
				<Card.Body>
					<Button>Austin</Button>
				</Card.Body>
			</Card>

			<Card className='text-center cities'>
				<Card.Body>
					<Button>New York</Button>
				</Card.Body>
			</Card>
		</CardDeck>
	</Styles>
);
