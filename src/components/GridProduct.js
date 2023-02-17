import React from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import pull from '../asset/images/pull.jpg'


function GridProduct() {
  return (
    <Row xs={1} md={4} className="g-4">
      {Array.from({ length: 12 }).map((_, idx) => (
        <Col>
          <Card>
            <Card.Img variant="top" src={pull} />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  )
}

export default GridProduct