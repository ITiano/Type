import PageLayout from "components/layout/PageLayout";
import CustomModal from "components/utils/CustomModal";
import LandingContainer from "../containers/landing/Landing";

const Landing = () => {
  return (
    <PageLayout className="!mt-0"> 
      <LandingContainer />
    </PageLayout>
  );
};

export default Landing;
