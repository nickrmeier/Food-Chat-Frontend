import React from 'react';
import { Card, Button, Modal, Form } from 'react-bootstrap';
import styled from 'styled-components';


const Styles = styled.div``;

export class AllPosts extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			title: this.props.post.title,
			summary: this.props.post.summary,
			revisit: this.props.post.revisit,
			show: false,
		}
	}
	handleChange = (evt) => {
		this.setState({ [evt.target.name]: evt.target.value });
	};
	handleShow = () => {
		this.setState({ show: true });
	};

	handleClose = () => {
		this.setState({ show: false });
	};

	

	render() {
		return (
			<div key={this.props.post._id}>
				<Card className='post'>
					<Modal show={this.state.show} onHide={this.handleClose}>
						<Modal.Header closeButton>Edit Post</Modal.Header>
						<Modal.Body>
							<Form>
								<Form.Group>
									<Form.Label>Dish</Form.Label>
									<Form.Control
										name='title'
										onChange={this.handleChange}
										type='text'
										placeholder='Name of dish'
										value={this.state.title}
									/>
								</Form.Group>
								<Form.Group>
									<Form.Label>Description</Form.Label>
									<Form.Control
										name='summary'
										onChange={this.handleChange}
										type='text'
										placeholder='Review the dish'
										value={this.state.summary}
									/>
								</Form.Group>
								<Form.Group>
									<Form.Label>Revisit?</Form.Label>
									<Form.Control
										as='select'
										name='revisit'
										onChange={this.handleChange}
										value={this.state.revisit}>
										<option>Please select one</option>
										<option>Yes</option>
										<option>No</option>
									</Form.Control>
								</Form.Group>
								<Button
									id={this.props.post._id}
									onClick={(evt) => {
										const data = {
											title: this.state.title,
											summary: this.state.summary,
											revisit: this.state.revisit
										}
										this.props.handleEditClick(evt, data);
									}}>
									Submit
								</Button>
							</Form>
						</Modal.Body>
					</Modal>
					<Card.Header>Dish: {this.props.post.title}</Card.Header>
					<Card.Body>
						<Card.Text>Description: {this.props.post.summary}</Card.Text>
						<Card.Text>Revisit: {this.props.post.revisit}</Card.Text>
					</Card.Body>
					<div className='group'>
						<Button
							variant='outline-info'
							size='sm'
							className='button'
							onClick={() => {
								this.handleShow();
								console.log(this.props.post._id);
							}}>
							Edit
						</Button>
						<Button
							variant='outline-info'
							size='sm'
							className='button'
							id={this.props.post._id}
							onClick={this.props.handleDeleteClick}>
							Delete
						</Button>
					</div>
				</Card>
			</div>
		);
	}
} 
