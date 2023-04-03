import React from 'react'
import { Button, Card, Col, Container, Row, Table } from "react-bootstrap";
import AdminSidebar from "./AdminSidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

function ViewUsers() {
  return (
    <div>
      <>
      <Container fluid className="px-3">
        <Row>
          <Col md={2} className="bg-light px-4 py-4">
            <AdminSidebar />
          </Col>
          <Col md={10}>
            <Container className='my-5 px-4'>
            <Table striped bordered hover className="text-center">
                  <thead>
                    <tr>
                      <th>User ID</th>
                      <th> Name</th>
                      <th>Email</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Mark</td>
                      <td>Otto@gmail.com</td>
                      <td>
                        <Button variant='primary'>
                          <FontAwesomeIcon icon={faPencilAlt}/>
                        </Button>
                        <Button className='mx-2' variant='danger'>
                          <FontAwesomeIcon icon={faTrashAlt}/>
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Jacob</td>
                      <td>Thornton@gmail.com</td>
                      <td>
                      <Button variant='primary'>
                          <FontAwesomeIcon icon={faPencilAlt}/>
                        </Button>
                        <Button className='mx-2' variant='danger'>
                          <FontAwesomeIcon icon={faTrashAlt}/>
                        </Button>
                      </td>
                    </tr>
                  </tbody>
                </Table>
            </Container>
          </Col>
        </Row>
      </Container>
    </>

    </div>
  )
}

export default ViewUsers