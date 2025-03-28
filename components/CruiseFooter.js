"use client";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaXTwitter,
  FaLinkedin,
} from "react-icons/fa";
import Link from "next/link";

const CruiseFooter = () => {
  return (
    <div>
      <footer className="footer " style={{ marginTop: "5rem" }}>
     


        <Container>
        <div style={{padding: '20px',
    borderRadius: '17px',
    background: '#d4daf2'}}>
            <span className="fw-bold py-2">Disclaimer:</span> Trending Cruise is your one-stop platform for booking
            your next cruise adventure. We help you find the best cruise that
            suits your preferences and budget. Please note that we are an
            independent third-party agent, and not directly associated with any
            cruise line. We connect customers with their dream cruises for a
            memorable vacation at low prices. Connect with us now to make your
            travel planning seamless.
          </div>


          <Row className="my-5">
            {/* Left Section */}
            <Col md={4}>
              <img
                src="/images/logo/logo.png"
                className="img-fluid "
                alt="cruise brand"
              />
              <h4 className="fw-bold text-dark">
                <a
                  href="tel: +1(855) 590-0764"
                  className="text-decoration-none text-dark"
                >
                  +1(855) 590-0764
                </a>
              </h4>
              <p className="text-muted small">
                Visit Trending Cruise to book your next cruise vacation, and get
                ready to sail at unbeatable prices. We don’t guarantee the
                displayed prices at the time of booking as they are based on
                historical data and tend to change. For discounted prices, book
                in advance.
              </p>
            </Col>

            <Col md={2} sm={2}>
              <h5>Legal</h5>
              <ul className="list-unstyled">
                <li>
                  <Link href="/privacy-policy">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="/terms-conditions">Terms and Conditions</Link>
                </li>
                {/* <li>
                  <a href="#">Cookies Policy</a>
                </li>
                <li>
                  <a href="#">Refund Policy</a>
                </li> */}
              </ul>
            </Col>

            {/* Middle Sections */}
            <Col md={2} sm={2}>
              <h5>The Company</h5>
              <ul className="list-unstyled">
                <li>
                  <Link href="/about-us">About Us</Link>
                </li>
                <li>
                  <Link href="/contact-us">Contact Us</Link>
                </li>
              </ul>
            </Col>
            <Col md={2} sm={2}>
              <h5>Our Cruise</h5>
              {["celebrity", "holland", "disney", "azamara", "norwegian", "royal-caribbean"].map((item, index) => (
                <Col key={index} xs="auto" className="">
                  <ul className="list-unstyled">
                    <li>
                      <a
                        className="text-decoration-none text-black"
                        style={{ fontSize: "12px", }}
                        href={`/${item}`}
                      >
                        {item.replace("-", "").toUpperCase()} CRUISE
                      </a>
                    </li>
                  </ul>
                </Col>
              ))}

            </Col>

            <Col md={2}>
              <h5>Quick Links</h5>
              <ul className="list-unstyled">
                <li>
                  <Link href="/service-fees">Our Service Fees</Link>
                </li>
                <li>
                  <Link href="/post-ticketing-fees">Post-Ticketing Fees</Link>
                </li>
                <li>
                  <Link href="taxes-fees">Taxes & Fees</Link>
                </li>
              </ul>
            </Col>
          </Row>

          {/* Payment Methods */}
          <div className="payment-section">
            <Row>
              <Col>
                <img src="/images/Visa.png" alt="Visa" />
              </Col>
              <Col>
                <img src="/images/Stripe.png" alt="Stripe" />
              </Col>
              <Col>
                <img src="/images/Paypal.png" alt="paypal" />
              </Col>
              <Col>
                <img src="/images/Discover.png" alt="discover" />
              </Col>
              <Col>
                <img src="/images/Maestro.png" alt="maestro" />
              </Col>
              <Col>
                <img src="/images/MasterCard.png" alt="maestro" />
              </Col>
              <Col>
                <img src="/images/jcb.png" alt="jcb" />
              </Col>
              <Col>
                <img src="/images/Amex.png" alt="amex" />
              </Col>
              <Col>
                <img src="/images/Affirm.png" alt="affirm" />
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
            All users agree to Trending Cruise Terms & Conditions and Privacy
            Policy. All users are subject to our Service Fees and Post Ticketing
            Fees.
          </p>
        </Container>


      </footer>
    </div>
  );
};

export default CruiseFooter;
