"use client";
import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const CruiseSearch = () => {
  return (
    <div className="hero-section">
      {/* Background Image */}
      <div className="hero-image">

        <img src="/images/cruise-home-poster.png" alt="Cruise Ship" className="img-fluid" />
      </div>
      {/* < div className="container">
     <h1 className="title-h1">Find Your Perfect Cruise Escape with Trending Cruise!
     </h1>
     </div> */}
      {/* Search Bar */}
      <Container className="search-container mob-search" >

        <Row className="align-items-center form-search">
          <Col md={3}>
            <Form.Group>
              <Form.Label>Cruising to</Form.Label>
              <Form.Select>
                <option>Anywhere</option>
                <option>Bahamas</option>
                <option>Caribbean</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group>
              <Form.Label>Leaving from</Form.Label>
              <Form.Select>
                <option>Any Port</option>
                <option>Miami</option>
                <option>New York</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group>
              <Form.Label>Leaving to</Form.Label>
              <Form.Select>
                <option>Any Date</option>
                <option>April 2025</option>
                <option>May 2025</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md={3} className="d-flex align-items-end ">
            <Button className="btn-search btn btn-sm" style={{ marginTop: '29px' }}>Search</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CruiseSearch;
