"use client";
import React from "react";
import Link from "next/link";
import { Navbar, Nav, Container } from "react-bootstrap";
// import "./globals.css";


const CruiseHeader = () => {
  return (
    <div>
      <Navbar expand="lg" className="bg-white shadow-sm py-2">
        <Container>
          {/* Logo */}
          <Navbar.Brand href="/">
            <span className="fw-bold fs-4"><img src="/images/logo/logo.png" className="img-responsive img-fluid" alt="cruise brand" /></span>
          </Navbar.Brand>

          {/* Toggle Button for Mobile */}
          <Navbar.Toggle aria-controls="navbarNav" />

          {/* Navigation Links */}
          <Navbar.Collapse id="navbarNav">
            <Nav className="ms-auto">
              <Nav.Link href="/">Cruise</Nav.Link>
              <Nav.Link href="/about-us">About Us</Nav.Link>
              <Nav.Link href="#">Contact Us</Nav.Link>
            </Nav>

            {/* Contact Section */}
            <div className="expert-contact">
              <span className="expert-text">Speak to an expert now</span>
              <a href="tel: +1-000-0000-000" className="expert-phone">
                +1-000-0000-000
              </a>
            </div>

          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default CruiseHeader








