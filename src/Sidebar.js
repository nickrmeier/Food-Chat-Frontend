import React from 'react';
import { Nav, Form, Button } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
	.side {
		background-color: rgba(80, 137, 154, 0.934);
		height: 100%;
		padding-left: 40px;
		padding-top: 20px;
		overflow: auto;
		margin-top: 1rem;
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
								<Button onClick={props.handlePostClick}>Create New Post</Button>
							</Form>
						</Nav>
					</Styles>
				);
