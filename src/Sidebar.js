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
		@media (max-width: 768px) {
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

	@media (max-width: 768px) {
		order: -1;
	}
`;

export class SideNav extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title: '',
			summary: '',
			revisit: true,
		};
	}
	handleChange = (evt) => {
		this.setState({ [evt.target.id]: evt.target.value });
	};
	render() {
		return (
			<Styles>
				<Nav className='side'>
					<Form>
						<Form.Group>
							<Form.Label>Dish</Form.Label>
							<Form.Control
								onChange={this.handleChange}
								type='text'
								placeholder='Name of dish'
								value={this.state.title}
								id='title'
							/>
						</Form.Group>
						<Form.Group>
							<Form.Label>Description</Form.Label>
							<Form.Control
								onChange={this.handleChange}
								type='text'
								placeholder='Review the dish'
								value={this.state.summary}
								id='summary'
							/>
						</Form.Group>
						<Form.Group>
							<Form.Label>Revisit?</Form.Label>
							<Form.Control
								as='select'
								onChange={this.handleChange}
								value={this.state.revisit}
								id='revisit'>
								<option>Please Select One</option>
								<option>Yes</option>
								<option>No</option>
							</Form.Control>
						</Form.Group>
						<Button
							onClick={(event) => {
								this.props.handlePostClick(event, this.state);
							}}
							className='button'>
							Create New Post
						</Button>
					</Form>
				</Nav>
			</Styles>
		);
	}
}
