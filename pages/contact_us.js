import React from "react";

// Components
import PageLayout from "components/layout/PageLayout";
import ContactUsForm from "components/contact_us/ContactUsForm";

const ContactUs = () => {
  return (
    <PageLayout className="centering flex-1">
      <section className="w-full max-w-3xl mx-auto">
        <h2 className="font-bold text-2xl text-center mb-5">Get in touch</h2>
        <p className="text-center mb-8">Contact Us for quote, help or collaboration</p>
        <ContactUsForm />
      </section>
    </PageLayout>
  );
};

export default ContactUs;
