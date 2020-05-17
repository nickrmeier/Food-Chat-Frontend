import React from 'react';
import { Nav, Form, Row, Col, Button } from 'react-bootstrap';

export const SideNav = () => (
					<Nav>
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
									<option>Yes</option>
									<option>No</option>
								</Form.Control>
							</Form.Group>
							<Button>Create New Post</Button>
						</Form>
					</Nav>
				);
