import FeaturesSection from "./_components/FeaturesSection";
import GuideSections from "./_components/GuideSections";
import HomeSection from "./_components/HomeSection";

const LandingContainer = () => {
  return (
    <main className="max-w-page">
      <HomeSection />
      <FeaturesSection />
      <GuideSections />
    </main>
  );
};

export default LandingContainer;
