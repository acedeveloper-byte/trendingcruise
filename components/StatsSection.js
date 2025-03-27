"use client";
import React from "react";
import { FaShip, FaSailboat, FaAnchor, FaRegCompass } from "react-icons/fa6"; // Using similar icons


const stats = [
  { icon: <FaShip />, count: "261", label: "Luxurious Cruises" },
  { icon: <FaSailboat />, count: "1354", label: "Satisfied Voyagers" },
  { icon: <FaAnchor />, count: "365", label: "Breathtaking Destinations" },
  { icon: <FaRegCompass />, count: "482", label: "Lavish Suites" },
];

const StatsSection = () => {
  return (
    <section className="stats-section container-fluid">
      {stats.map((stat, index) => (
        <div key={index} className="stat-item">
          <div className="icon">{stat.icon}</div>
          <h3>{stat.count}</h3>
          <p>{stat.label}</p>
        </div>
      ))}
    </section>
  );
};

export default StatsSection;
