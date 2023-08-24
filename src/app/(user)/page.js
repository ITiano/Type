import FeaturesSection from "src/app/(user)/components/FeaturesSection";
import GuideSections from "src/app/(user)/components/GuideSections";
import HomeSection from "src/app/(user)/components/HomeSection";
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
