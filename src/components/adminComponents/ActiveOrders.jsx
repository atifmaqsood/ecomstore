import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import AdminSidebar from "./AdminSidebar";
import myImage from "../../images/Products/p2.jpg";
import OrderForm from "./OrderForm";

function ActiveOrders() {
  return (
    <div>
      <>
        <Container fluid className="px-3">
          <Row>
            <Col md={2} className="bg-light px-4 py-4">
              <AdminSidebar />
            </Col>
            <Col md={10}>
              <Container className="my-4 px-5">
                <Row>
                  <Col md={5}>
                    <Card className="my-3">
                      <Card.Header>Order ID : 23</Card.Header>
                      <Card.Body>
                        <Card.Title>Order title : T-Shirt</Card.Title>
                        <Card.Text>
                          With supporting text below as a natural lead-in to
                          additional content.
                        </Card.Text>
                        <Card.Text>
                          <strong>Username :</strong> Atif
                        </Card.Text>

                        <div>
                          <Button variant="info">View</Button>
                          <Button className="mx-2" variant="danger">
                            Close
                          </Button>
                        </div>
                      </Card.Body>
                    </Card>
                    <Card>
                      <Card.Header>Order ID : 23</Card.Header>
                      <Card.Body>
                        <Card.Title>Order title : T-Shirt</Card.Title>
                        <Card.Text>
                          With supporting text below as a natural lead-in to
                          additional content.
                        </Card.Text>
                        <Card.Text>
                          <strong>Username :</strong> Atif
                        </Card.Text>

                        <div>
                          <Button variant="info">View</Button>
                          <Button className="mx-2" variant="danger">
                            Close
                          </Button>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>

                  {/* Order Form Component below */}
                  <Col md={7}>
                    <OrderForm />
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>
      </>
    </div>
  );
}

export default ActiveOrders;
