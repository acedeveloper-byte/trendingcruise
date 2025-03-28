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
        {/* Background Image */}
        <div className="hero-image">
          <img src="/images/cruise-home-poster.png" alt="Cruise Ship" className="img-fluid" />
        </div>

      </div>

      <section>

        <Container>
          <Col md={12}>
            <div className="content-main">
              <div className="span-content">
                <h1>
                  About trending Cruise
                </h1>
                <p>
                  infinitytravelmate.com (Infinity Travels) is an IATA-certified US-based travel agency that provides customers with a seamless booking experience. Our mission is to offer an exceptional, transformative, memorable travel experience. As a leading flight booking service provider, let us cater to your needs and demands today. Our dedicated team of travel professionals is well-experienced and works tirelessly to provide you with a smoother booking experience at competitive rates.
                </p>
              </div>
              <div className="span-content">

                <h3>
                  Our Team at infinitytravelmate.com (Infinity Travels)
                </h3>
                <p>
                  infinitytravelmate.com (Infinity Travels) is an IATA-certified US-based travel agency that provides customers with a seamless booking experience. Our mission is to offer an exceptional, transformative, memorable travel experience. As a leading flight booking service provider, let us cater to your needs and demands today. Our dedicated team of travel professionals is well-experienced and works tirelessly to provide you with a smoother booking experience at competitive rates.
                </p>
              </div>
              <div className="span-content">

                <h3>
                  infinitytravelmate.com (Infinity Travels)’s Vision
                </h3>
                <p>
                  infinitytravelmate.com (Infinity Travels) is an IATA-certified US-based travel agency that provides customers with a seamless booking experience. Our mission is to offer an exceptional, transformative, memorable travel experience. As a leading flight booking service provider, let us cater to your needs and demands today. Our dedicated team of travel professionals is well-experienced and works tirelessly to provide you with a smoother booking experience at competitive rates.
                </p>
              </div>
              <div className="span-content">

                <h3>
                  What sets infinitytravelmate.com (Infinity Travels) apart from the rest?
                </h3>
                <p>
                  infinitytravelmate.com (Infinity Travels) is an IATA-certified US-based travel agency that provides customers with a seamless booking experience. Our mission is to offer an exceptional, transformative, memorable travel experience. As a leading flight booking service provider, let us cater to your needs and demands today. Our dedicated team of travel professionals is well-experienced and works tirelessly to provide you with a smoother booking experience at competitive rates.
                </p>
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
