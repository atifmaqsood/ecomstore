import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import UserSidebar from './UserSidebar'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function UserDashboard() {
  return (
    <>
    <Container fluid>

<Row>
  <Col md={2}>
  <UserSidebar/>
  </Col>
  <Col md={10}>
            
            <h1 className="my-3 text-center">User Dashboard</h1>
            
            <Container>

            <Row>
              <Col xs={6} md={4}>

                 <Card>
                       <Card.Body>
                         <Card.Title>
                          Order History
                         </Card.Title>
                         <Card.Text>
                           Total Orders : 6
                         </Card.Text>
                         <Button variant="primary">View <FontAwesomeIcon icon={faArrowRight} /></Button>
                       </Card.Body>
                 </Card>

              </Col>
              <Col xs={6} md={4}>

              <Card>
                       <Card.Body>
                         <Card.Title>
                          Wishlists
                         </Card.Title>
                         <Card.Text>
                           Total Wishlists : 14
                         </Card.Text>
                         <Button variant="primary">View <FontAwesomeIcon icon={faArrowRight} /></Button>
                       </Card.Body>
                 </Card>

              </Col>
             </Row>

            </Container>

             

          
        </Col>
</Row>

    </Container>
    </>
  )
}

export default UserDashboard