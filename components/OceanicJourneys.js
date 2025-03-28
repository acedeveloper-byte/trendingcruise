"use client";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const OceanicJourneys = () => {
  return (
    <section className="oceanic-journeys container-fluid">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <h2 className="text-primary fw-bold">About Trending Cruise </h2>
            <p>
              At Trending Cruise, we believe that a dream vacation should be
              within reach for everyone. That’s why we offer unlimited deals and
              discounts on cruise trips so you can plan your dream vacation at
              minimal prices. Choose your desired cruise line, nd get ready to
              immerse yourself in pure relaxation at each port.
            </p>
            <ul className="list-unstyled">
              <li>
                <FontAwesomeIcon
                  icon={faCheck}
                  className="mx-1"
                  style={{ color: "#13d313" }}
                />
                Exclusive Deals & Offers
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faCheck}
                  className="mx-1"
                  style={{ color: "#13d313" }}
                />
                Personalized Cruise Packages
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faCheck}
                  className="mx-1"
                  style={{ color: "#13d313" }}
                />
                Diverse Dining Options
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faCheck}
                  className="mx-1"
                  style={{ color: "#13d313" }}
                />
                24*7 Customer Support
              </li>
            </ul>
          </Col>

          {/* Image Section */}
          <Col md={6} className="text-center">
            <img
              src="/images/ocean.png"
              alt="Cruise"
              className="cruise-image"
              style={{ width: "50%" }}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default OceanicJourneys;
