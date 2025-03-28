"use client";
import React from "react";
import { Navbar, Nav, Container, Col, Row } from "react-bootstrap";


const CruiseHeader = () => {
  return (
    <div>
      <Navbar expand="lg" className="bg-white shadow-sm py-2">
        <Container>
          <Navbar.Brand href="/">
            <span className="fw-bold fs-4"><img src="/images/logo/logo.png" className="img-responsive img-fluid" alt="cruise brand" /></span>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbarNav" />

          <Navbar.Collapse id="navbarNav">
            <Nav className="ms-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about-us">About Us</Nav.Link>
              <Nav.Link href="/contact-us">Contact Us</Nav.Link>
            </Nav>

            <div className="expert-contact">
              <span className="expert-text">Speak to an expert now</span>
              <a href="tel: +1(855) 590-0764" className="expert-phone">
                +1(855) 590-0764
              </a>
            </div>

          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container fluid className="py-2">
        <Row className="d-flex flex-nowrap overflow-auto justify-content-center" style={{ whiteSpace: "nowrap" }}>
          {["celebrity", "holland", "disney", "azamara", "norwegian", "royal-caribbean"].map((item, index) => (
            <Col key={index} xs="auto" className="m-2 px-3">
              <a
                className="text-decoration-none text-black"
                style={{ fontSize: "11px", fontWeight: "bold", display: "inline-block" }}
                href={`/${item}`}
              >
                {item.replace("-", "").toUpperCase()} CRUISE
              </a>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default CruiseHeader








