'use client'
import React from 'react'
import CruiseHeader from '@/components/CruiseHeader'
import "./globals.css";


const page = () => {
  return (
    <>
      <CruiseHeader/>
      <div className="hero-section">
      {/* Background Image */}
      <div className="hero-image">
      
        <img src="/images/cruise-home-poster.png" alt="Cruise Ship" className="img-fluid" />
      </div>
    
      
    </div>

    </>
  )
}

export default page
