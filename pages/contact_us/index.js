import PageLayout from "components/layout/PageLayout";
import ContactUsContainer from "containers/contact_us/ContactUsContainer";
import useViewport from "hooks/useViewport";

const ContactUs = () => {
  const { height } = useViewport();

  return (
    <PageLayout className="centering" style={{ minHeight: height - 64 + "px" }}>
      <ContactUsContainer />
    </PageLayout>
  );
};

export default ContactUs;
