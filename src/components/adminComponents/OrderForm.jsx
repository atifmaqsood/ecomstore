import React from "react";
import { Container, Row, Form, Col, Button } from "react-bootstrap";

function OrderForm() {
  return (
    <>
      <Container className="p-5 orderForm">
        <h3 className="text-center">Order Form</h3>
        <Form>
          <Row className="mb-3">
            <Form.Group controlId="orderID">
              <Form.Label>Order ID</Form.Label>
              <Form.Control readonly disabled type="text" value="32" />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Col>
              <Form.Group controlId="orderName">
                <Form.Label>Order Name</Form.Label>
                <Form.Control type="text" value="T-Shirt" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="userName">
                <Form.Label>User Name</Form.Label>
                <Form.Control type="text" value="Atif" />
              </Form.Group>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col>
              <Form.Group controlId="subject">
                <Form.Label>Quantity</Form.Label>
                <Form.Control type="text" disabled value="2" />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col>
              <Form.Group controlId="orderPrice">
                <Form.Label>Order Price</Form.Label>
                <Form.Control disabled type="text" value="1500" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Label>Order Status</Form.Label>
              <Form.Select aria-label="Order Status">
                <option disabled>Change Order Status</option>
                <option value="pending">Pending</option>
                <option value="approve">Approve</option>
                <option value="reject">Reject</option>
              </Form.Select>
            </Col>
          </Row>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </>
  );
}

export default OrderForm;
