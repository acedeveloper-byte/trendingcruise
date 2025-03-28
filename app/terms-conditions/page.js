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
        <h1 className="text-center fw-bold">Terms and Conditions</h1>
        <p>Welcome to TrendingCruise! These Terms and Conditions ("Terms") govern your use of the services provided by TrendingCruise ("we," "our," or "us") through our website, located at www.trendingcruise.com ("Site"), and any services, products, or other content offered by us in relation to the sale, booking, or promotion of cruise services from third-party cruise lines ("Services"). By accessing or using our Site and Services, you agree to comply with these Terms. If you do not agree with these Terms, please do not use our Site or Services.</p>

        <h2 className="fw-bold fs-5">1. Overview</h2>
        <p>TrendingCruise is a platform that allows you to browse, compare, and book cruise services from various third-party cruise lines ("Cruise Lines"). We do not operate or manage any cruise lines, ships, or bookings directly. Instead, we provide you with access to services and products offered by various cruise lines. When you book a cruise through TrendingCruise, your agreement is directly with the respective Cruise Line, and your booking is subject to their terms and conditions as well.</p>

        <h2 className="fw-bold fs-5">2. Use of the Site and Services</h2>
        <p>By using our Site and Services, you agree to:</p>
        <ul>
          <li>Provide accurate, current, and complete information when using our Site.</li>
          <li>Use the Site only for lawful purposes and in accordance with applicable laws.</li>
          <li>Not engage in any activity that may harm, disable, or impair the functionality of our Site or Services.</li>
          <li>Not interfere with or disrupt the Site or any associated servers or networks.</li>
        </ul>

        <h2 className="fw-bold fs-5">3. Booking Process</h2>
        <p>TrendingCruise facilitates bookings with third-party Cruise Lines. When you select a cruise, the pricing, availability, terms, and conditions associated with your booking are subject to the Cruise Line's policies.</p>
        <p>Any booking you make through our Site will be processed and confirmed directly by the Cruise Line. TrendingCruise is not responsible for any errors, cancellations, or issues that arise with bookings.</p>

        <h2 className="fw-bold fs-5">4. Payment and Fees</h2>
        <p>All payments for bookings made via TrendingCruise are processed through secure payment gateways provided by third-party service providers.</p>
        <p>The prices for cruise services listed on the Site are subject to change at any time without notice. Taxes, fees, and additional charges may apply and will be disclosed at the time of booking.</p>

        <h2 className="fw-bold fs-5">5. Cancellation, Refunds, and Changes</h2>
        <p>Cancellations, changes, or requests for refunds are subject to the terms and conditions of the respective Cruise Line. Please review the individual policies for cancellation, refund, and change fees before booking.</p>

        <h2 className="fw-bold fs-5">6. Limitation of Liability</h2>
        <p>TrendingCruise is not liable for any loss, damage, injury, or inconvenience caused by third-party Cruise Lines or their services. Any issues regarding your cruise booking must be resolved directly with the Cruise Line.</p>

        <h2 className="fw-bold fs-5">7. Intellectual Property</h2>
        <p>The content on the Site, including but not limited to text, graphics, logos, images, and software, is the property of TrendingCruise or its licensors and is protected by intellectual property laws.</p>

        <h2 className="fw-bold fs-5">8. Privacy Policy</h2>
        <p>Your use of the Site is also governed by our Privacy Policy, which explains how we collect, use, and protect your personal information. By using the Site, you agree to our Privacy Policy.</p>

        <h2 className="fw-bold fs-5">9. Termination</h2>
        <p>We may suspend or terminate your access to the Site and Services at our sole discretion if you violate these Terms or engage in unlawful or improper conduct.</p>

        <h2 className="fw-bold fs-5">10. Governing Law and Dispute Resolution</h2>
        <p>These Terms are governed by and construed in accordance with the laws of the United States.</p>
        <p>Any disputes arising from your use of the Site and Services shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association (AAA).</p>

        <h2 className="fw-bold fs-5">11. Changes to Terms and Conditions</h2>
        <p>TrendingCruise reserves the right to update or modify these Terms at any time. We will notify you of any significant changes by posting an updated version of the Terms on the Site.</p>

        <h2 className="fw-bold fs-5">12. Contact Us</h2>
        <p>If you have any questions regarding these Terms or our Services, please contact us at:</p>
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
