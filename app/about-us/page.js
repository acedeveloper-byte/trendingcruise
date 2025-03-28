'use client'
import React from 'react'
import CruiseHeader from '@/components/CruiseHeader'
import { Col, Container } from 'react-bootstrap'
import CruiseFooter from '@/components/CruiseFooter'
import CruiseBanner from '@/components/CruiseBanner'

const page = () => {
  return (
    <React.Fragment>
      <CruiseHeader />
      <div className="hero-section">
        <div className="hero-image">
          <img src="/images/cruise-home-poster.png" alt="Cruise Ship" className="img-fluid" />
        </div>
      </div>
      <section>
        <Container>
          <Col md={12}>
            <div className="content-main">
              <div className="span-content">
                <h1>About Us - TrendingCruise</h1>
                <p>Welcome to TrendingCruise!</p>
                <p>At TrendingCruise, we are dedicated to offering affordable cruise adventures to each one of you so that you can sail towards your dream destination without any second thoughts. With us, you will find great deals on different cruise lines. Find the best deal as per your plan, and have a budget-friendly cruise journey.</p>
                <p>Whether you are a seasoned cruiser or a first-time voyager, we are here to help you find the best cruises to match your preferences. Our team of seasoned travelers and cruise experts aims to help you plan the perfect voyage. So get in touch with our experts as soon as possible to plan a personalized cruise trip that suits your preferences and budget.</p>
              </div>
              <div className="span-content">
                <h3>Find Excellent Deals on Different Cruises!</h3>
                <p>We believe that everyone has the right to go on a cruise vacation once in a lifetime; therefore, we offer incredible discounts for your ease. We are on a mission to inspire and empower travelers to board their dream cruises for an unforgettable vacation. To get the right deal, speak to our experts as soon as possible.</p>
                <p>Cruising is a way to explore this gorgeous world in a different way. If a cruise trip is on your bucket list, you must connect with our team now. Share your details, and find the perfect deal as per your travel plan.</p>
              </div>
              <div className="span-content">
                <h3>Why Choose TrendingCruise?</h3>
                <ul>
                  <li><strong>Diverse Cruise Options:</strong> From family-friendly cruises to luxury ships, you can easily choose your preferred cruise line with us.</li>
                  <li><strong>Personalized Cruise Adventures:</strong> With us, you have the flexibility to plan your cruise vacation to your liking.</li>
                  <li><strong>Expert Advice:</strong> Get in touch with our experts to seek any guidance regarding your cruise trip.</li>
                  <li><strong>Customer Satisfaction:</strong> Your experience matters to us; therefore, we aim to make planning your cruise as seamless and enjoyable as possible.</li>
                  <li><strong>Deals and Offers:</strong> At TrendingCruise, you will find incredible deals on different cruises for an affordable journey.</li>
                </ul>
              </div>
              <div className="span-content">
                <h3>Plan Your Dream Cruise Trip Today!</h3>
                <p>Ready to set sail? Start your journey with TrendingCruise. Whether you are exploring new destinations, comparing cruise lines, or searching for the best prices, we are here to make your planning effortless and exciting.</p>
              </div>
            </div>
          </Col>
        </Container>
      </section>
      <section>
        <CruiseBanner />
      </section>
      <CruiseFooter />
    </React.Fragment>
  )
}

export default page
