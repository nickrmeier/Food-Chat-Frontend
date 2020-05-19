import React from 'react';
import { Card, Button, Modal, Form } from 'react-bootstrap';

export const AllPosts = (props) => {
	console.log(props.posts)
	const list = props.posts.map((post) => {
		return (
			<>
				<Modal show={props.show} onHide={props.handleClose}>
					<Modal.Header closeButton>Edit Post</Modal.Header>
					<Modal.Body>
						<Form>
							<Form.Group>
								<Form.Label>Dish</Form.Label>
								<Form.Control
									name='dish'
									onChange={props.handleTitleChange}
									autocomplete={post.title}
									type='text'
									placeholder='Name of dish'
									value={props.title}
								/>
							</Form.Group>
							<Form.Group>
								<Form.Label>Description</Form.Label>
								<Form.Control
									name='dish'
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
									name='dish'
									onChange={props.handleRevisitChange}
									value={props.revisit}>
									<option>Please select one</option>
									<option>Yes</option>
									<option>No</option>
								</Form.Control>
							</Form.Group>
							<Button name={post._id} onClick={props.handleEditClick}>
								Submit
							</Button>
						</Form>
					</Modal.Body>
				</Modal>
				<Card key={post._id} className='post'>
					<Card.Header>Dish: {post.title}</Card.Header>
					<Card.Body>
						<Card.Text>Description: {post.summary}</Card.Text>
						<Card.Text>Revisit: {post.revisit}</Card.Text>
					</Card.Body>
					<div role='group'>
						<Button
							variant='outline-info'
							size='sm'
							className='button'
							onClick={props.handleShow}>
							Edit
						</Button>
						<Button
							variant='outline-info'
							size='sm'
							className='button'
							name={post._id}
							onClick={props.handleDeleteClick}>
							Delete
						</Button>
					</div>
				</Card>
			</>
		);
	});
	return <div>{list}</div>;
};
