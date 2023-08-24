import React from "react";
import routes from "@routes/routes";
import ContactUsContainer from "src/app/(user)/contact_us/components/ContactUsContainer";

export const metadata = { title: routes.contactUs.title };

const ContactUs = () => <ContactUsContainer />;

export default ContactUs;