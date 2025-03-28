"use client";
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';


const destinations = [
  {
    name: "BAHAMAS",
    image: "/images/bahamas.png",
  },
  {
    name: "EUROPE",
    image: "/images/europe.png",
  },
  {
    name: "CARIBBEAN",
    image: "/images/caribbean.png",
  },

  {
    name: "ALASKA",
    image: "/images/alaska.png",
  },

  {
    name: "MEXICO",
    image: "/images/maxico.png",
  },

  {
    name: "CANADA",
    image: "/images/canada.png",
  },

];

const ExploreDestination = () => {
  return (
    <div>
      <section className="destinations">
        <Container>
          <div className="text-center mb-4">
            <h2 className="text-primary fw-bold">EXPLORE</h2>
            <p className="text-muted">Today's Top Cruise Destinations</p>
          </div>
          <Row className="justify-content-center">
            {destinations.map((destination, index) => (
              <Col md={4} key={index} className="d-flex justify-content-center">
                <Card className="" style={{ border: 'none' }}>
                  <Card.Img variant="top" src={destination.image} alt={destination.name} />
                  <Card.Body>
                    <h5 className="destination-name">{destination.name}</h5>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </div>
  )
}

export default ExploreDestination








