import React from 'react';
import { Card } from 'react-bootstrap';

export const AllPosts = (props) => {
	const list = props.restaurant.comments.map((comment) => {
		return (
			<Card key={comment._id}>
				<Card.Header>What to get? {comment.title}</Card.Header>
				<Card.Body>
					<Card.Text>Summary: {comment.summary}</Card.Text>
					<Card.Text>Revisit: {comment.revisit}</Card.Text>
				</Card.Body>
			</Card>
		);
	});
	return <div>{list}</div>;
};
