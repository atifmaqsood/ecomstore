import { faCartArrowDown, faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Button, ButtonGroup, Card } from 'react-bootstrap'
import p1 from '../images/Products/p1.jpg'

function Product() {
  return (
    <>
    <Card>
      <Card.Img variant="top" style={{ height:"190px"}} src={p1} />

        <Card.Body>
          <Card.Title>Product Title</Card.Title>
          <Card.Text>Rs 500</Card.Text>
          <ButtonGroup>
            <Button variant="primary" className="mx-1" data-bs-toggle="tooltip" data-bs-placement="top" title="Add to Cart">
              <FontAwesomeIcon icon={faCartArrowDown} /> 
            </Button>
            <Button variant="primary" className="mx-1" data-bs-toggle="tooltip" data-bs-placement="top" title="Add to Wishlist">
              <FontAwesomeIcon icon={faHeart} />
            </Button>
          </ButtonGroup>
          
        </Card.Body>
      </Card>
    </>
  )
}

export default Product