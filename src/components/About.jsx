import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import atif from '../images/atif.jpg'
import MyBreadcrumb from './MyBreadcrumb'

function About() {
  return (
    <>
    <MyBreadcrumb title='About us' pagename='About'/>

    <Container className=' my-4'>
      <Row className='mt-5'>
        <Col lg={6} sm={12}>
          <Image style={{height: "350px"}} fluid src={atif} alt="Atif's Picture"  />
        </Col>
        <Col lg={6} sm={12}>
         <h4>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h4>
         <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum iusto accusamus ut consequatur ratione explicabo cumque est eum dignissimos iste minima in perferendis facilis tempora voluptate ex magnam, vitae maiores perspiciatis exercitationem. Assumenda voluptatem praesentium eaque perspiciatis at earum adipisci accusamus similique est unde explicabo, tempore quidem magnam eos nihil rem tenetur fugiat cum ipsum, ut doloribus dicta facilis hic? Possimus suscipit magni ea ad animi, sit illum veniam nulla!</p>
        </Col>
      </Row>
    </Container>

    </>
  )
}

export default About