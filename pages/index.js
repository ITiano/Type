import PageLayout from "components/layout/PageLayout";

// Components
import FeaturesSection from "components/pages/home/FeaturesSection";
import GuideSections from "components/pages/home/GuideSections";
import HomeSection from "components/pages/home/HomeSection";

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
