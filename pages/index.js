import PageLayout from "components/layout/PageLayout";
import FeaturesSection from "containers/landing/_components/FeaturesSection";
import GuideSections from "containers/landing/_components/GuideSections";
import HomeSection from "containers/landing/_components/HomeSection";

const Landing = () => {
  return (
    <PageLayout className="!pt-0">
      <HomeSection />
      <FeaturesSection />
      {/* <GuideSections /> */}
    </PageLayout>
  );
};

export default Landing;
