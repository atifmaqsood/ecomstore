
import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import {Tilt} from 'react-tilt'

function CallToAction() {
  return (
    <Container>
       <Tilt className="my-4" options={{
          scale: 1.1,
          max: 10,
          speed: 300,
          glare: true,
          "max-glare": 0.3,
        }}>
      <Card className="my-4 p-4 shadow">
      <Row>
        <Col sm={12} md={8} className='d-flex align-items-center'>
          <Card.Body>
            <Card.Title>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, ratione qui aspernatur accusamus voluptas maiores!</Card.Title>
          </Card.Body>
        </Col>
        <Col sm={12} md={4} className='d-flex align-items-center justify-content-center'>
          <Button type='button' block>Contact Now</Button>
        </Col>
      </Row>
      </Card>
      </Tilt>
    </Container>
  )
}

export default CallToAction
