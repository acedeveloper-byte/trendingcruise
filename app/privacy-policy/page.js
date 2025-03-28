'use client';
import React from 'react';
import CruiseHeader from '@/components/CruiseHeader';
import { Col, Container } from 'react-bootstrap';
import CruiseFooter from '@/components/CruiseFooter';
import CruiseBanner from '@/components/CruiseBanner';

const page = () => {
  return (
    <React.Fragment>
      <CruiseHeader />
      <div className="hero-section">
        <div className="hero-image">
          <img
            src="/images/cruise-home-poster.png"
            alt="Cruise Ship"
            className="img-fluid"
          />
        </div>
      </div>

      <Container className="my-5">
        <h1 className="text-center fw-bold">Privacy Policy </h1>
        <p>At TrendingCruise ("we," "our," or "us"), we value your privacy and are committed to protecting your personal information. This Privacy Policy ("Policy") explains how we collect, use, disclose, and safeguard your information when you visit our website located at www.trendingcruise.com ("Site") or use any of the services provided by us in relation to booking cruises from various third-party cruise lines ("Services"). By using our Site and Services, you consent to the practices described in this Policy.</p>
        
        <h2 className="fw-bold fs-5">1. Information We Collect</h2>
        <p>We collect various types of information from you in connection with your use of our Site and Services:</p>
        <ul>
          <li><strong>Personal Information:</strong> When you make a booking or interact with our Site, we may collect personal information such as your name, email address, phone number, billing address, passport details, payment information (credit/debit card details), and other relevant information needed to process your booking.</li>
          <li><strong>Usage Data:</strong> We may collect information about your interactions with the Site, such as your IP address, browser type, device type, pages you visit, time spent on the Site, and other analytics data. This helps us improve the functionality and user experience of our Site.</li>
          <li><strong>Cookies and Tracking Technologies:</strong> We use cookies, web beacons, and other tracking technologies to enhance your experience and gather information about how you use our Site. You can control the use of cookies through your browser settings, but some features of the Site may not function properly without them.</li>
        </ul>

        <h2 className="fw-bold fs-5">2. How We Use Your Information</h2>
        <p>We use the information we collect for various purposes, including:</p>
        <ul>
          <li>To Process Your Bookings</li>
          <li>To Communicate with You</li>
          <li>To Improve Our Services</li>
          <li>To Comply with Legal Requirements</li>
        </ul>

        <h2 className="fw-bold fs-5">3. Sharing Your Information</h2>
        <p>We may share your personal information with third parties in the following circumstances:</p>
        <ul>
          <li><strong>Third-Party Cruise Lines:</strong> When you make a booking, we share your personal information with the relevant third-party cruise line.</li>
          <li><strong>Service Providers:</strong> We may engage third-party companies or individuals to perform services such as payment processing, email communication, and website analytics.</li>
          <li><strong>Business Transfers:</strong> If TrendingCruise is involved in a merger, acquisition, or sale of assets, your personal information may be transferred as part of that transaction.</li>
          <li><strong>Legal Compliance:</strong> We may disclose your personal information if required to do so by law.</li>
        </ul>

        <h2 className="fw-bold fs-5">4. Data Security</h2>
        <p>We use industry-standard security measures, such as encryption and secure socket layer (SSL) technology, to protect your personal information.</p>

        <h2 className="fw-bold fs-5">5. Your Choices and Rights</h2>
        <p>You have the following rights concerning your personal information:</p>
        <ul>
          <li>Access and Correction</li>
          <li>Opt-Out</li>
          <li>Deletion</li>
        </ul>

        <h2 className="fw-bold fs-5">6. Retention of Your Information</h2>
        <p>We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Policy.</p>

        <h2 className="fw-bold fs-5">7. Third-Party Links</h2>
        <p>Our Site may contain links to third-party websites, including the websites of cruise lines, payment processors, and service providers.</p>

        <h2 className="fw-bold fs-5">8. International Data Transfers</h2>
        <p>If you are located outside of the USA, please be aware that your personal information may be transferred and processed in the USA or other countries.</p>

        <h2 className="fw-bold fs-5">9. Changes to This Privacy Policy</h2>
        <p>TrendingCruise reserves the right to update or modify this Privacy Policy at any time.</p>

        <h2 className="fw-bold fs-5">10. Contact Us</h2>
        <p>If you have any questions or concerns, please contact us at:</p>
        <p className="fw-bold fs-5">Email: XXXX</p>
        <p>Phone: XXXX</p>
      </Container>

      <section>
        <CruiseBanner />
      </section>
      <CruiseFooter />
    </React.Fragment>
  );
};

export default page;
