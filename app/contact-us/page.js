'use client'
import React from 'react'
import CruiseHeader from '@/components/CruiseHeader'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import CruiseFooter from '@/components/CruiseFooter'
import CruiseBanner from '@/components/CruiseBanner'
import 'bootstrap/dist/css/bootstrap.min.css';


const page = () => {
    return (
        <React.Fragment>
            <CruiseHeader />
            <div className="hero-section">
                {/* Background Image */}
                <div className="hero-image">
                    <img src="/images/cruise-home-poster.png" alt="Cruise Ship" className="img-fluid" />
                </div>

            </div>
            <section>

                <Container>
                    <div className="text-center mt-2">
                        <h2>
                            Contact-Us
                        </h2>
                    </div>
                    <Row>
                        <Col md={4} sm={2} className="contact-card">
                            <Card >
                                <Card.Img variant="top" src="/images/contact/email.png" />
                                <Card.Body>
                                    <Card.Title>Email us at</Card.Title>
                                    {/* <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text> */}
                                    <a class="btn btn-primary" href="mailto:support@trendingcruise.com">support@trendingcruise.com</a>
                                </Card.Body>
                            </Card>

                        </Col>
                        <Col md={4} sm={2} className="contact-card">
                            <Card>
                                <Card.Img variant="top" src="/images/contact/support.png" />
                                <Card.Body>
                                    <Card.Title>Call us</Card.Title>
                                    {/* <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text> */}
                                    <a className="btn btn-primary" href="tel:+1 (800) 654-6549">+1 (800) 654-6549</a>
                                </Card.Body>
                            </Card>

                        </Col>
                        <Col md={4} sm={2} className="contact-card">
                            <Card>
                                <Card.Img variant="top" src="/images/contact/address.png" />
                                <Card.Body>
                                    <Card.Title>Address</Card.Title>
                                    <Card.Text>
                                          1015 N America Wy, Miami, FL 33132, USA
                                    </Card.Text>
                                    <a className="btn btn-primary" href="https://www.google.com/maps/place/1015+N+America+Wy,+Miami,+FL+33132,+USA/@25.7787574,-80.1805171,17z/data=!3m1!4b1!4m6!3m5!1s0x88d9b4475aaa2e33:0x30cfe1c48dee825f!8m2!3d25.7787526!4d-80.1779422!16s%2Fg%2F11ss7z44hz?entry=ttu&g_ep=EgoyMDI1MDMyNS4wIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D
                                    ">Go somewhere</a>
                                </Card.Body>
                            </Card>

                        </Col>
                    </Row>
                </Container>
            </section>

            <section>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3474.517890262904!2d-80.17909342473558!3d25.7781333084715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b69a5e9f4d1b%3A0x556b623d2d46f1b!2s1015%20N%20America%20Way%2C%20Miami%2C%20FL%2033132%2C%20USA!5e0!3m2!1sen!2sin!4v1741766060571!5m2!1sen!2sin"
                    width="1400"        
                    height="450"
                    style={{ border: "0" }}
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade">
                </iframe> </section>
            <section>
                <CruiseBanner />
            </section>
            <CruiseFooter />
        </React.Fragment>
    )
}

export default page
