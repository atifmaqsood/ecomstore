import React from 'react'
import { Container, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

function Signin() {
  return (
    <>
    <Container>
        <div className="Main">
          <h1 className="text-center my-2 ">Login</h1>

          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="Enter username" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Button variant="primary"  >
              Login
            </Button>
          </Form>

          <Form.Text className="text-muted">
            Don't have an account? <Link to="/signup">Sign up</Link> now.
          </Form.Text>

          <Container className='text-center my-4'>
          <Form.Text ><strong > OR Login With </strong></Form.Text>
              <div className="d-flex mt-2 justify-content-center ">
                <div
                  id="fb"
                  className="socialIconBox d-flex align-items-center justify-content-center"
                >
                  <a
                    href="#"
                    className=" d-flex align-items-center justify-content-start"
                  >
                    <FontAwesomeIcon icon={faFacebookF} />
                  </a>
                </div>
                <div
                  id="insta"
                  className="socialIconBox d-flex align-items-center justify-content-center"
                >
                  <a
                    href="#"
                    className=" d-flex align-items-center justify-content-start"
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </div>
                <div
                  id="linkd"
                  className="socialIconBox d-flex align-items-center justify-content-center"
                >
                  <a
                    href="#"
                    className=" d-flex align-items-center justify-content-start"
                  >
                    <FontAwesomeIcon icon={faLinkedinIn} />
                  </a>
                </div>
                <div
                  id="twitter"
                  className="socialIconBox d-flex align-items-center justify-content-center"
                >
                  <a
                    href="#"
                    className=" d-flex align-items-center justify-content-start"
                  >
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                </div>
              </div>
            </Container>

        </div>
      </Container>
    </>
  )
}

export default Signin