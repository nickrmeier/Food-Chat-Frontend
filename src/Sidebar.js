import React from 'react';
import { Nav, Form, Row, Col, Button } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
	.side {
		background-color: rgba(80, 137, 154, 0.934);
		width: 250px;
		height: 100vh;
		padding-left: 25px;
		padding-top: 20px;
	}
`;

export const SideNav = () => (
	<Styles>
		<Nav className='side'>
			<Form>
				<Form.Group>
					<Form.Label>Dish</Form.Label>
					<Form.Control type='text' placeholder='Name of dish' />
				</Form.Group>
				<Form.Group>
					<Form.Label>Description</Form.Label>
					<Form.Control type='text' placeholder='Review the dish' />
				</Form.Group>
				<Form.Group>
					<Form.Label>Revisit?</Form.Label>
					<Form.Control as='select'>
						<option>Please select one</option>
						<option>Yes</option>
						<option>No</option>
					</Form.Control>
				</Form.Group>
				<Button>Create New Post</Button>
			</Form>
		</Nav>
	</Styles>
);
