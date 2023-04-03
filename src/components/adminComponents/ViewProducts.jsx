import React from "react";
import { Button, Card, Col, Container, Row, Table } from "react-bootstrap";
import AdminSidebar from "./AdminSidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import myImage from "../../images/Products/p2.jpg";

function ViewProducts() {
  return (
    <div>
      <>
        <Container fluid className="px-3">
          <Row>
            <Col md={2} className="bg-light px-4 py-4">
              <AdminSidebar />
            </Col>
            <Col md={10}>
              <Container className="my-5 px-4">
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Name</th>
                      <th>Price</th>
                      <th>Purchase Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <img
                          style={{ height: "50px", width: "50px" }}
                          src={myImage}
                        />
                      </td>
                      <td>Pizza</td>
                      <td>Rs900</td>

                      <td>
                        <p>02/04/2023</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <img
                          style={{ height: "50px", width: "50px" }}
                          src={myImage}
                        />
                      </td>
                      <td>Pizza</td>
                      <td>Rs900</td>

                      <td>
                        <p>02/04/2023</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <img
                          style={{ height: "50px", width: "50px" }}
                          src={myImage}
                        />
                      </td>
                      <td>Pizza</td>
                      <td>Rs900</td>

                      <td>
                        <p>02/04/2023</p>
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
  );
}

export default ViewProducts;
