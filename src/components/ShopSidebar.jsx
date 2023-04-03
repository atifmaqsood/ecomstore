import React, { useState } from 'react';
import { Navbar, Nav, InputGroup, FormControl, Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function ShopSidebar() {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <>
    
    <Navbar  expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setIsOpen(!isOpen)} />
      <Navbar.Collapse id="basic-navbar-nav" className={isOpen ? 'show' : ''}>
        
        <Form>
            <InputGroup className='my-4'>
            
            <FormControl
            className="d-inline"
            placeholder="Search in Store"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            />
            <Button className='btn btn-info btn-m '><FontAwesomeIcon icon={faMagnifyingGlass} /></Button>
            
            </InputGroup>

           <div className='my-3'>
            <h3>Price Range</h3>
           <Form.Check 
          type="checkbox"
          id="price-checkbox"
          label="500-999"
          name='filter-price'
        />

        <Form.Check
          type="checkbox"
          label="1000-1999"
          id="price-checkbox"
          name='filter-price'
        />
        <Form.Check
          type="checkbox"
          label="2000-2999"
          id="price-checkbox"
          name='filter-price'
        />
           </div>
           <div className='my-3'>
            <h3>Size Range</h3>
           <Form.Check 
          type="checkbox"
          id="size-checkbox"
          label="Small"
          name='filter-price'
        />

        <Form.Check
          type="checkbox"
          label="Medium"
          id="size-checkbox"
          name='filter-price'
        />
        <Form.Check
          type="checkbox"
          label="Large"
          id="size-checkbox"
          name='filter-price'
        />
           </div>

        </Form>
        
      </Navbar.Collapse>
    </Navbar>

    </>
  )
}

export default ShopSidebar