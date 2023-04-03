import React from "react";
import { Button, Card, Col, Container, Row, Table } from "react-bootstrap";
import AdminSidebar from "./AdminSidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function AdminDashboard() {
  return (
    <div>
      <>
        <Container fluid className="px-3">
          <Row>
            <Col md={2} className="bg-light px-4 py-4">
              <AdminSidebar />
            </Col>
            <Col md={10}>
              <h1 className="my-3 text-center">Admin Dashboard</h1>

              <Container>
                <Row className="px-5">
                  <Col xs={6} md={4}>
                    <Card
                      className="my-3 text-center text-white"
                      style={{ backgroundColor: "#DC3545" }}
                    >
                      <Card.Header>Total Orders</Card.Header>
                      <Card.Body>
                        <Card.Title>56</Card.Title>
                        <Card.Text>
                          <a
                            href="#"
                            style={{ textDecoration: "none", color: "#fff" }}
                          >
                            View
                          </a>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col xs={6} md={4}>
                    <Card
                      className="my-3 text-center text-white"
                      style={{ backgroundColor: "#28A745" }}
                    >
                      <Card.Header>Total Products</Card.Header>
                      <Card.Body>
                        <Card.Title>203</Card.Title>
                        <Card.Text>
                          <a
                            href="#"
                            style={{ textDecoration: "none", color: "#fff" }}
                          >
                            View
                          </a>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col xs={6} md={4}>
                    <Card
                      className="my-3 text-center text-white"
                      style={{ backgroundColor: "#17A2B8" }}
                    >
                      <Card.Header>Total Users</Card.Header>
                      <Card.Body>
                        <Card.Title>72</Card.Title>
                        <Card.Text>
                          <a
                            href="#"
                            style={{ textDecoration: "none", color: "#fff" }}
                          >
                            View
                          </a>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Container>

              <Container className="my-5">
                <p className="text-center py-2 text-white bg-dark">
                  List of New Users
                </p>

                <Table striped hover className="text-center">
                  <thead>
                    <tr>
                      <th>User ID</th>
                      <th> Name</th>
                      <th>Email</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Mark</td>
                      <td>Otto@gmail.com</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Jacob</td>
                      <td>Thornton@gmail.com</td>
                    </tr>
                  </tbody>
                </Table>
              </Container>
            </Col>
          </Row>
        </Container>
      </>
    </div>
  );
}

export default AdminDashboard;
