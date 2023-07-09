"use client";

import React, { useState } from "react";
import CustomTextArea from "@components/utils/CustomTextArea";
import CustomInput from "@components/utils/CustomInput";
import CustomBtn from "@components/utils/CustomBtn";
import { CallingIcon, EmailIcon, LocationIcon } from "@assets/icons/icons";

const ContactOptions = [
  { title: "Location", value: "Any where", icon: <LocationIcon /> },
  { title: "Phone", value: "+98 912 345 6789", icon: <CallingIcon /> },
  { title: "Email", value: "itiano@gmail.com", icon: <EmailIcon /> },
];

const initialValues = { title: "", description: "" };

const ContactUsContainer = () => {
  const [value, setValue] = useState(initialValues);

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="w-full max-w-3xl mx-auto mb-8 mt-28">
      <h2 className="font-bold text-2xl text-center mb-5">Get in touch</h2>
      <p className="text-center mb-8">Contact Us for quote, help or collaboration</p>
      <div className="flex-between-center flex-col sm:flex-row gap-12 shadow-lg p-10 w-full rounded-3xl bg-white">
        <div className="flex flex-col gap-6 w-full sm:w-auto">
          {ContactOptions.map((contact) => (
            <ContactElements key={contact.title} {...contact} />
          ))}
        </div>
        <form onSubmit={onSubmit} className="flex-1 flex flex-col gap-3">
          <CustomInput value={value} setValue={setValue} label="Email" name="title" placeholder="info@gmail.com" />
          <CustomTextArea value={value} setValue={setValue} label="Message" name="description" placeholder="type here..." />
          <div>
            <CustomBtn text="Send" arrowEndBtn className="px-0" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactUsContainer;

const ContactElements = ({ icon, title, value }) => (
  <div className="flex-start-center gap-2">
    <span className="bg-gray-600 w-12 h-12 rounded-full centering">{icon}</span>
    <div>
      <p className="text-gray-800">{title}</p>
      <p className="font-semibold mt-1">{value}</p>
    </div>
  </div>
);
