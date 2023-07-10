"use client";

import React, { useCallback, useState } from "react";
import CustomTextArea from "@components/utils/CustomTextArea";
import CustomInput from "@components/utils/CustomInput";
import CustomBtn from "@components/utils/CustomBtn";
import { CallingIcon, EmailIcon, LocationIcon } from "@assets/icons/icons";
import { addContactUs } from "@services/contactUsApi";
import { toast } from "react-hot-toast";
import { useAuth } from "src/context/AuthContextProvider";

const ContactOptions = [
  { title: "Location", value: "Any where", icon: <LocationIcon /> },
  { title: "Phone", value: "+98 912 345 6789", icon: <CallingIcon /> },
  { title: "Email", value: "itiano@gmail.com", icon: <EmailIcon /> },
];

const initialValues = { title: "", message: "" };

const ContactUsContainer = () => {
  const [user] = useAuth();
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState(initialValues);

  const onSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      if (user) {
        setLoading(true);
        const { error } = await addContactUs({ ...value, user_id: user.id });
        if (error) toast.error("Sth went wrong please try again later");
        else {
          setValue(initialValues);
          toast.success("Form submitted successfully and we will see it soon");
        }
        setLoading(false);
      } else toast.error("Please login first");
    },
    [user, value]
  );

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
        <form onSubmit={onSubmit} className="flex-1 flex flex-col gap-2">
          <CustomInput value={value} setValue={setValue} label="Title" name="title" placeholder="Subject" />
          <CustomTextArea value={value} setValue={setValue} label="Message" name="message" placeholder="Type here..." />
          <div>
            <CustomBtn
              text="Send"
              arrowEndBtn
              type="submit"
              className="px-0 mt-1"
              loading={loading}
              disabled={!value.title || !value.message}
            />
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
