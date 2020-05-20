import React from 'react';
import { Nav, Form, Button } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
	.side {
		color: white;
		background-color: rgba(34, 72, 99);
		width: 250px;
		height: 100vh;
		padding-left: 25px;
		padding-top: 20px;
			@media (max-width: 576px) 
			{ 
			width: 100%;
			height: 350px;
			}
	}

	.form-control {
		@media (max-width: 576px) { 
		width: 290px;
		}	
	}

	.button {
		width: 100%;
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

export const SideNav = (props) => (
					<Styles>
						<Nav className='side'>
							<Form>
								<Form.Group>
									<Form.Label>Dish</Form.Label>
									<Form.Control
										onChange={props.handleTitleChange}
										type='text'
										placeholder='Name of dish'
										value={props.title}
									/>
								</Form.Group>
								<Form.Group>
									<Form.Label>Description</Form.Label>
									<Form.Control
										onChange={props.handleSummaryChange}
										type='text'
										placeholder='Review the dish'
										value={props.summary}
									/>
								</Form.Group>
								<Form.Group>
									<Form.Label>Revisit?</Form.Label>
									<Form.Control
										as='select'
										onChange={props.handleRevisitChange}
										value={props.revisit}>
										<option>Please Select One</option>
										<option>Yes</option>
										<option>No</option>
									</Form.Control>
								</Form.Group>
				<Button onClick={props.handlePostClick} className="button">Create New Post</Button>
							</Form>
						</Nav>
					</Styles>
				);
