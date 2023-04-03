import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Product from './Product'

function TopSellingProducts() {
  return (
    <>
    <Container className='my-4'>
      <h2>Top Selling</h2>
    </Container>

    <Container>

       <Row xs={1} sm={2} md={3} lg={4}>
        <Col>
        <Product/>
        </Col>
        <Col>
        <Product/>
        </Col>
        <Col>
        <Product/>
        </Col>
        <Col>
        <Product/>
        </Col>
        <Col>
        <Product/>
        </Col>
        <Col>
        <Product/>
        </Col>
       </Row>

    </Container>
    </>
  )
}

export default TopSellingProducts