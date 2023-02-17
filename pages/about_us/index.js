import PageLayout from "components/layout/PageLayout";
import AboutUsContainer from "containers/about_us/AboutUsContainer";

const AboutUs = () => {
  return (
    <PageLayout className="bg-white" footerClassName="mt-20">
      <AboutUsContainer />
    </PageLayout>
  );
};

export default AboutUs;
