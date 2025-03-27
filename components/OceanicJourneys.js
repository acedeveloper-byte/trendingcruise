"use client";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";


const OceanicJourneys = () => {
  return (
    <section className="oceanic-journeys container-fluid">
      <Container>
        <Row className="align-items-center">
          {/* Text Section */}
          <Col md={6}>
            <h2 className="text-primary fw-bold">Oceanic Journeys</h2>
            <p>
              Sail to exotic destinations on unforgettable cruise packages. Explore remote
              islands, dive into pristine waters, and unwind on sandy shores. Discover the magic 
              of coastal living, immerse yourself in local cultures, and let each port paint a picture 
              of pure adventure and relaxation.
            </p>
            <ul className="list-unstyled">
              <li><i className="fas fa-check text-success"></i> 24/7 Customer Support</li>
              <li><i className="fas fa-check text-success"></i> Value packed Offers</li>
              <li><i className="fas fa-check text-success"></i> Gourmet Dining</li>
              <li><i className="fas fa-check text-success"></i> Unlimited Destination</li>
            </ul>
          </Col>

          {/* Image Section */}
          <Col md={6} className="text-center">
            <img src="/images/ocean.png" alt="Cruise" className="cruise-image"  style={{ width: '50%'}} />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default OceanicJourneys;
