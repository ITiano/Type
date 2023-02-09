import PageLayout from "components/layout/PageLayout";
import LandingContainer from "../containers/landing/Landing";

const Landing = () => {
  return (
    <PageLayout className="relative bg-white" topNavClassName="absolute inset-x-0">
      <LandingContainer />
    </PageLayout>
  );
};

export default Landing;
