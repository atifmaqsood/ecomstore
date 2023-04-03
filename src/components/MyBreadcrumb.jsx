import React from 'react'
import {  Breadcrumb, Container } from 'react-bootstrap'

function MyBreadcrumb(props) {
  return (
    <Container fluid className='MyBreadcrumb d-flex align-items-center justify-content-center' style={{height:"300px"}}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h2 className="mb-4">{props.title}</h2>
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item active>{props.pagename}</Breadcrumb.Item>
        </Breadcrumb>
      </div>
    </Container>
  )
}

export default MyBreadcrumb
