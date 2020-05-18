import React from 'react';
import { Nav, Form, Row, Col, Button } from 'react-bootstrap';
import './Sidebar.css'

export const SideNav = () => (
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
				);
