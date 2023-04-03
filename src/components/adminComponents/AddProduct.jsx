import React from "react";
import { Button, Form, Card, Col, Container, Row } from "react-bootstrap";


import AdminSidebar from "./AdminSidebar";

function AddProduct() {
 

  return (
    <>
      <Container fluid className="px-3">
        <Row>
          <Col md={2} className="bg-light px-4 py-4">
            <AdminSidebar />
          </Col>
          <Col md={10}>
            <h1 className="my-3 text-center">Add Product</h1>

            <Container>
              <Form className="py-4" >
                <Form.Group className="mb-3" controlId="formBasicTitle">
                  <Form.Label>Product Title</Form.Label>
                  <Form.Control
                    type="text"
                    name="title"
                    placeholder="Enter title"
                    
                    
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicDesc">
                  <Form.Label>Product Description</Form.Label>
                  <Form.Control
                    type="text"
                    name="desc"
                    placeholder="Enter description"
                    
                    
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCat">
                  <Form.Label>Product Category</Form.Label>
                  <Form.Control
                    type="text"
                    name="category"
                    placeholder="Enter Category"
                    
                   
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicRat">
                  <Form.Label>Product Rating</Form.Label>
                  <Form.Control
                    type="number"
                    name="rating"
                    placeholder="Enter rating"
                    
                    
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPop">
                  <Form.Label>Product Popularity</Form.Label>
                  <Form.Control
                    type="text"
                    name="popularity"
                    placeholder="Enter popularity"
                    
                    
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPrice">
                  <Form.Label>Product Price</Form.Label>
                  <Form.Control
                    type="number"
                    name="price"
                    placeholder="Enter price"
                    
                    
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicImg">
                  <Form.Label>Product Image</Form.Label>
                  <Form.Control
                    type="file"
                    placeholder="Enter image"
                    name="image"
                    accept="image/*"
                    
                  />
                </Form.Group>

                <Button variant="primary" type="submit">
                  Insert
                </Button>
              </Form>
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default AddProduct;
