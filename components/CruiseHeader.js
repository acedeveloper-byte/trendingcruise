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
          <span className="fw-bold fs-4">TrendingCruise</span>
        </Navbar.Brand>

        {/* Toggle Button for Mobile */}
        <Navbar.Toggle aria-controls="navbarNav" />

        {/* Navigation Links */}
        <Navbar.Collapse id="navbarNav">
          <Nav className="ms-auto">
            <Nav.Link href="#">Cruise</Nav.Link>
            <Nav.Link href="#">About Us</Nav.Link>
            <Nav.Link href="#">Contact Us</Nav.Link>
          </Nav>

          {/* Contact Section */}
          <div className="ms-3 d-flex align-items-center border-start ps-3">
            <span className="text-muted small me-1">Speak to an expert now</span>
            <a href="tel:+1-000-000-0000" className="text-primary fw-bold">
            +1-000-000-0000
            </a>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default CruiseHeader








