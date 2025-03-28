"use client";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebook, FaInstagram, FaPinterest, FaXTwitter, FaLinkedin } from "react-icons/fa";


const CruiseFooter = () => {
  return (
    <div>
      <footer className="footer " style={{ marginTop: '5rem' }}>
        <Container>
          <Row>
            {/* Left Section */}
            <Col md={4}>
              <img src="/images/logo/logo.png" className="img-fluid " alt="cruise brand" />
              <h4 className="fw-bold text-dark">+1-000-000-0000</h4>
              <p className="text-muted small">
                Visit Trending Cruise to book your next cruise vacation, and get ready to sail at unbeatable prices. We don’t guarantee the displayed prices at the time of booking as they are based on historical data and tend to change. For discounted prices, book in advance.</p>
            </Col>

            <Col md={2} sm={2}>
              <h5>Legal</h5>
              <ul className="list-unstyled">
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms and Conditions</a></li>
                <li><a href="#">Cookies Policy</a></li>
                <li><a href="#">Refund Policy</a></li>
               
              </ul>
            </Col>

            {/* Middle Sections */}
            <Col md={2} sm={2}>
              <h5>The Company</h5>
              <ul className="list-unstyled">
                <li><a href="#">About Us</a></li>
                <li><a href="#">Contact Us</a></li>
              
              </ul>
            </Col>

           

            <Col md={2}>
              <h5>Quick Links</h5>
              <ul className="list-unstyled">
                <li><a href="#">Our Service Fees</a></li>
                <li><a href="#">Post-Ticketing Fees</a></li>
                <li><a href="#">Taxes & Fees</a></li>
              
              </ul>
            </Col>
          </Row>

          {/* Payment Methods */}
          <div className="payment-section">
            <Row>
              <Col>
                <img src="/images/visa.png" alt="Visa" />
              </Col>
              <Col>
                <img src="/images/stripe.png" alt="Stripe" />
              </Col>
              <Col>
                <img src="/images/paypal.png" alt="paypal" />
              </Col>
              <Col>
                <img src="/images/discover.png" alt="discover" />
              </Col>
              <Col>
                <img src="/images/maestro.png" alt="maestro" />
              </Col>
              <Col>
                <img src="/images/mastercard.png" alt="maestro" />
              </Col>
              <Col>
                <img src="/images/jcb.png" alt="jcb" />
              </Col>
              <Col>
                <img src="/images/amex.png" alt="amex" />
              </Col>
              <Col>
                <img src="/images/affirm.png" alt="affirm" />
              </Col>
            </Row>
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







