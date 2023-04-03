import React from "react";
import { Container, Button, Form, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <>
      <Container>
        <div className="Main">
          <h1 className="text-center my-2 ">Create an Account</h1>

          <Form>
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="fName">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="fName"
                    placeholder="Enter First Name"
                  />
                </Form.Group>
              </Col>

              <Col>
                <Form.Group className="mb-3" controlId="lName">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="lName"
                    placeholder="Enter Last Name"
                  />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter email"
              />
            </Form.Group>

          <Row>
            <Col>
            
            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Password"
              />
            </Form.Group>
            </Col>
            <Col>
            <Form.Group className="mb-3" controlId="formConfirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
              />
            </Form.Group>
            </Col>
          </Row>
 

            <Form.Group className="mb-3">
              <Form.Label>Profile Picture</Form.Label>
              <Form.Control type="file" name="image" accept="image/*" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Signup
            </Button>
          </Form>

          <Form.Text className="text-muted">
            Already have an account? <Link to="/signin">Login</Link> here.
          </Form.Text>
          

        </div>
      </Container>
    </>
  );
}

export default Signup;
