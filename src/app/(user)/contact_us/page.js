import React from "react";
import routes from "@routes/routes";
import ContactUsContainer from "@components/pages/contact_us/ContactUsContainer";

export const metadata = { title: routes.contactUs.title };

const ContactUs = () => <ContactUsContainer />;

export default ContactUs;
