import PageLayout from "components/layout/PageLayout";
import ContactUsContainer from "containers/contact_us/ContactUsContainer";

const ContactUs = () => {
  return (
    <PageLayout className="bg-white" footerClassName="mt-20">
      <ContactUsContainer />
    </PageLayout>
  );
};

export default ContactUs;
