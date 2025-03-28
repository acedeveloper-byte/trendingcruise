import React from "react";
import CruiseHeader from "./CruiseHeader";
import CruiseSearch from "./CruiseSearch";
import CruiseFooter from "./CruiseFooter";
import ExploreDestination from "./ExploreDestination";
import CruiseBanner from "./CruiseBanner";
import StatsSection from "./StatsSection";
import OceanicJourneys from "./OceanicJourneys";

const Home = () => {
  return (
    <>
      <CruiseHeader />
      <CruiseSearch />
      <ExploreDestination />

      <CruiseBanner />

      <StatsSection />

      <OceanicJourneys />
      <CruiseFooter />
    </>
  );
};

export default Home;
