import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import ProductsCataloge from "./ProductsCataloge";
import ShopSidebar from "./ShopSidebar";

function Shop() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col lg={3} md={4} sm={12} className="px-4">
            {/* Rendering Shop sidebar component below */}
            <ShopSidebar />
          </Col>
          <Col>
            <Container className="my-4">
            <Row>
              <Col lg={6} md={7} sm={6} xs={6}>
                <h2>Top Products</h2>
              </Col>
              <Col lg={6} md={5} sm={6} xs={6}>
                <Form>
                  <Form.Select aria-label="Default select example">
                    <option disabled>Search Top Variants</option>
                    <option value="1">Top Rated</option>
                    <option value="2">Popluar Items</option>
                    <option value="3">Availabale Items</option>
                  </Form.Select>
                </Form>
              </Col>
            </Row>
            </Container>

          {/* Rendering Products Cataloge Component below */}
 
          <ProductsCataloge/>

          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Shop;
