import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function Products(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.productImage} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Cras justo odi</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
      {/*<Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>*/}
    </Card>
  );
}

export default Products;