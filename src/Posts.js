import React from 'react';
import { Card, Button, Modal, Form } from 'react-bootstrap';

export const AllPosts = (props) => {
	console.log(props.posts)
	const list = props.posts.map((post) => {
		return (
			<div key={post._id}>
				<Card className='post'>
					<Modal show={props.show} onHide={props.handleClose}>
						<Modal.Header closeButton>Edit Post</Modal.Header>
						<Modal.Body>
							<Form>
								<Form.Group>
									<Form.Label>Dish</Form.Label>
									<Form.Control
										name='dish'
										onChange={() => {
											props.handleTitleChange();
											console.log(post._id);
										}}
										type='text'
										placeholder='Name of dish'
										value={post.title}
									/>
								</Form.Group>
								<Form.Group>
									<Form.Label>Description</Form.Label>
									<Form.Control
										name='dish'
										onChange={props.handleSummaryChange}
										type='text'
										placeholder='Review the dish'
										value={post.summary}
									/>
								</Form.Group>
								<Form.Group>
									<Form.Label>Revisit?</Form.Label>
									<Form.Control
										as='select'
										name='dish'
										onChange={props.handleRevisitChange}
										value={post.revisit}>
										<option>Please select one</option>
										<option>Yes</option>
										<option>No</option>
									</Form.Control>
								</Form.Group>
								<Button
									id={post._id}
									onClick={(evt) => {
										props.handleEditClick(evt);
										console.log(post._id);
									}}>
									Submit
								</Button>
							</Form>
						</Modal.Body>
					</Modal>
					<Card.Header>Dish: {post.title}</Card.Header>
					<Card.Body>
						<Card.Text>Description: {post.summary}</Card.Text>
						<Card.Text>Revisit: {post.revisit}</Card.Text>
					</Card.Body>
					<div className='group'>
						<Button
							variant='outline-info'
							size='sm'
							className='button'
							onClick={() => {
								props.handleShow();
								console.log(post._id);
							}}>
							Edit
						</Button>
						<Button
							variant='outline-info'
							size='sm'
							className='button'
							id={post._id}
							onClick={props.handleDeleteClick}>
							Delete
						</Button>
					</div>
				</Card>
			</div>
		);
	});
	return <div>{list}</div>;
};
