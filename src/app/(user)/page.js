import FeaturesSection from "@components/pages/home/FeaturesSection";
import GuideSections from "@components/pages/home/GuideSections";
import HomeSection from "@components/pages/home/HomeSection";
import React from "react";

const Home = () => {
  return (
    <div>
      <HomeSection />
      <FeaturesSection />
      <GuideSections />
    </div>
  );
};

export default Home;
