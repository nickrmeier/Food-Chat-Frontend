import React from 'react';
import { Card, CardDeck, Button } from 'react-bootstrap';



class City extends React.Component {
    
 
    render() {
        return (
            <CardDeck>
                <Card>
        <Card.Header></Card.Header>
                    <Button>View</Button>
                </Card>
                <Card>
                    <Button>View</Button>
                </Card>
            </CardDeck>
        )
    }
 
}

export default City;
