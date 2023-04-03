import React from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseUser } from "@fortawesome/free-solid-svg-icons";
import { faBlenderPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import MyBreadcrumb from "./MyBreadcrumb";


function Contact() {
  return (
    <>
      {/* <h2 className="my-5 text-center">Contact us </h2> */}

<MyBreadcrumb title="Contact us" pagename="Contact"/>

      <Container className=" my-4">
        <Row className="mt-5">
          <Col lg={4} sm={6}>
            <h4>Get in touch </h4>
            <p>Looking for help? Fill the form and start a new adventure.</p>
            <div id="divider"></div>

            <Container>
              <h5 className="mt-4 mb-3">Office</h5>
              <Row>
                <Col
                  xs={2}
                  sm={2}
                  className="d-flex  align-items-center justify-content-center"
                >
                  <FontAwesomeIcon icon={faHouseUser} />
                </Col>
                <Col
                  xs={6}
                  sm={10}
                  className="d-flex px-0 align-items-center justify-content-start"
                >
                  <p className="m-0">Allama Iqbal Town, Lahore</p>
                </Col>
              </Row>
            </Container>
            <Container>
              <h5 className="mt-4 mb-3">Phone</h5>
              <Row>
                <Col
                  xs={2}
                  sm={2}
                  className="d-flex  align-items-center justify-content-center"
                >
                  <FontAwesomeIcon icon={faBlenderPhone} />
                </Col>
                <Col
                  xs={6}
                  sm={10}
                  className="d-flex px-0 align-items-center justify-content-start"
                >
                  <p className="m-0">+923027259490</p>
                </Col>
              </Row>
            </Container>
            <Container className="mb-5">
              <h5 className="mt-4 mb-3">Email</h5>
              <Row>
                <Col
                  xs={2}
                  sm={2}
                  className="d-flex  align-items-center justify-content-center"
                >
                  <FontAwesomeIcon icon={faEnvelope} />
                </Col>
                <Col
                  xs={6}
                  sm={10}
                  className="d-flex px-0 align-items-center justify-content-start"
                >
                  <p className="m-0">atifmaqsood907@gmail.com</p>
                </Col>
              </Row>
            </Container>

            <Container>
              <h3>Follow us</h3>
              <div className="d-flex justify-space-around">
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
          </Col>
          <Col lg={8} sm={6}>
            <Card className="my-4 p-4 shadow">
              <h2>Let’s Connect</h2>
              <p>Contact us for more information</p>

{/* Contact Form below */}

              <Form className="MyForm">
                <Row className="mb-3">
                  <Col >
                    <Form.Group controlId="firstName">
                      <Form.Control
                        type="text"
                        size="lg"
                        placeholder="Enter first name"
                      />
                    </Form.Group>
                  </Col>
                  <Col >
                    <Form.Group controlId="lastName">
                      <Form.Control type="text" size="lg" placeholder="Enter last name" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col >
                    <Form.Group controlId="subject">
                      <Form.Control type="text" size="lg" placeholder="Enter Subject" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col>
                    <Form.Group controlId="message">
                      
                      <Form.Control
                        as="textarea"
                        size="lg"
                        rows={5}
                        placeholder="Enter your message"
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Contact;
