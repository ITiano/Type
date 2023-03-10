import PageLayout from "components/layout/PageLayout";

// Components
import FeaturesSection from "components/home/FeaturesSection";
import GuideSections from "components/home/GuideSections";
import HomeSection from "components/home/HomeSection";

const Landing = () => {
  return (
    <PageLayout className="!pt-0">
      <HomeSection />
      <FeaturesSection />
      <GuideSections /> 
    </PageLayout>
  );
};

export default Landing;
