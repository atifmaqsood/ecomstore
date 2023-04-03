import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Product from './Product'

function ProductsCataloge() {
  return (
    <>
    <Container>
      <Row xs={1} sm={2} md={3} lg={4}>
        <Col className='my-2'>
        <Product/>
        </Col>
        <Col className='my-2'>
        <Product/>
        </Col>
        <Col className='my-2'>
        <Product/>
        </Col>
        <Col className='my-2'>
        <Product/>
        </Col>
        <Col className='my-2'>
        <Product/>
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default ProductsCataloge