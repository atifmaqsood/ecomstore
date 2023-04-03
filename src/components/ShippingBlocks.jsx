import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import user from '../images/user.png'

function ShippingBlocks() {
  return (
    <>
    
    <div className='container my-4'>
  <Row>
    <Col xs={12} md={4}>
      <Card className="d-flex flex-row">
        <div className="w-30 d-flex align-items-center">
          <Card.Img variant="top" style={{ width: "64px", height: "64px" }} src={user} />
        </div>
        <div className="w-70 d-flex flex-column justify-content-center">
          <Card.Body>
            <Card.Title>Card Title 1</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </Card.Text>
           
          </Card.Body>
        </div>
      </Card>
    </Col>
    <Col xs={12} md={4}>
      <Card className="d-flex flex-row">
        <div className="w-30 d-flex align-items-center">
          <Card.Img variant="top" style={{ width: "64px", height: "64px" }} src={user} />
        </div>
        <div className="w-70 d-flex flex-column justify-content-center">
          <Card.Body>
            <Card.Title>Card Title 1</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </Card.Text>
           
          </Card.Body>
        </div>
      </Card>
    </Col>

    <Col xs={12} md={4}>
      <Card className="d-flex flex-row">
        <div className="w-30 d-flex align-items-center">
          <Card.Img variant="top" style={{ width: "64px", height: "64px" }} src={user} />
        </div>
        <div className="w-70 d-flex flex-column justify-content-center">
          <Card.Body>
            <Card.Title>Card Title 1</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </Card.Text>
           
          </Card.Body>
        </div>
      </Card>
    </Col>
  </Row>
</div>


    </>
  )
}

export default ShippingBlocks