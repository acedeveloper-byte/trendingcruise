"use client";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebook, FaInstagram, FaPinterest, FaXTwitter, FaLinkedin } from "react-icons/fa";


const CruiseFooter = () => {
  return (
    <div>
      <footer className="footer " style={{marginTop: '5rem'}}>
      <Container>
        <Row>
          {/* Left Section */}
          <Col md={4}>
            <h2>TrendingCruise</h2>
            <h4 className="fw-bold text-dark">+1-000-000-0000</h4>
            <p className="text-muted small">
            Visit Trending Cruise to book your next cruise vacation, and get ready to sail at unbeatable prices. We don’t guarantee the displayed prices at the time of booking as they are based on historical data and tend to change. For discounted prices, book in advance. 

            </p>
          </Col>

          {/* Middle Sections */}
          <Col md={2}>
            <h5>About</h5>
            <ul className="list-unstyled">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Article</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Media</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Business Class</a></li>
            </ul>
          </Col>

          <Col md={2}>
            <h5>Booking</h5>
            <ul className="list-unstyled">
              <li><a href="#">Bahamas</a></li>
              <li><a href="#">Europe</a></li>
              <li><a href="#">Caribbean</a></li>
              <li><a href="#">Alaska</a></li>
              <li><a href="#">Mexico</a></li>
              <li><a href="#">Canada</a></li>
            </ul>
          </Col>

          <Col md={2}>
            <h5>Other Links</h5>
            <ul className="list-unstyled">
              <li><a href="#">Airlines</a></li>
              <li><a href="#">Espanol</a></li>
              <li><a href="#">Flight Booking</a></li>
              <li><a href="#">International Flights</a></li>
              <li><a href="#">Visa</a></li>
              <li><a href="#">Airports</a></li>
              <li><a href="#">Forum</a></li>
            </ul>
          </Col>
        </Row>

        {/* Payment Methods */}
        <div className="payment-section">
          <img src="/images/visa.png" alt="Visa" />
          <img src="/images/stripe.png" alt="Stripe" />
          <img src="/images/paypal.png" alt="PayPal" />
          <img src="/images/discover.png" alt="Discover" />
          <img src="/images/mastercard.png" alt="MasterCard" />
          <img src="/images/maestro.png" alt="Maestro" />
          <img src="/images/jcb.png" alt="JCB" />
          <img src="/images/amex.png" alt="Amex" />
          <img src="/images/affirm.png" alt="Affirm" />
        </div>

        {/* Social Media Icons */}
        <div className="social-icons">
          {/* <FaFacebook />
          <FaInstagram />
          <FaXTwitter />
          <FaPinterest />
          <FaLinkedin /> */}
        </div>

        {/* Terms & Policy */}
        <p className="text-center text-muted small mt-3">
          All users agree to All Seasons Travel LLC Terms & Conditions and Privacy Policy. All users are subject to our Service Fees and Post Ticketing Fees.
        </p>
      </Container>
    </footer>
    </div>
  )
}

export default CruiseFooter






