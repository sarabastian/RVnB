import React from 'react';
import { Card, CardDeck, Button } from 'react-bootstrap';

class VanCard extends React.Component {
    
    render(){

        return(
<CardDeck>
<Card className="card-img-top img-fluid">
  <Card.Img variant="top" src={this.props.van.images[0].img_url} />
  <Card.Body>
    <Card.Title>{this.props.van.name}</Card.Title>
    <Card.Text>
   {this.props.van.description}
    </Card.Text>
    <Button variant="primary">See More</Button>
  </Card.Body>
</Card>
</CardDeck>
        )
    }
}

export default VanCard;