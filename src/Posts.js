import React from 'react';
import { Card, Button } from 'react-bootstrap';

export const AllPosts = (props) => {
	const list = props.restaurant.comments.map((comment) => {
		return (
			<Card key={comment._id} className='post'>
				<Card.Header>Dish: {comment.title}</Card.Header>
				<Card.Body>
					<Card.Text>Description: {comment.summary}</Card.Text>
					<Card.Text>Revisit: {comment.revisit}</Card.Text>
				</Card.Body>
				<div role='group'>
					<Button variant='outline-info' size='sm' className='button'>
						Edit
					</Button>{' '}
					<Button variant='outline-info' size='sm' className='button'>
						Delete
					</Button>
				</div>
			</Card>
		);
	});
	return <div>{list}</div>;
};
