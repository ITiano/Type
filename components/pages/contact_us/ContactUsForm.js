import React from "react";

// formik
import { useFormik } from "formik";

// Components
import CustomBtn from "components/utils/CustomBtn";
import CustomInput from "components/utils/CustomInput";
import CustomTextArea from "components/utils/CustomTextArea";

// Icons
import CallingIcon from "public/icons/CallingIcon";
import EmailIcon from "public/icons/EmailIcon";
import LocationIcon from "public/icons/LocationIcon";

const ContactOptions = [
  { title: "Location", value: "Any where", icon: <LocationIcon /> },
  { title: "Phone", value: "+98 912 345 6789", icon: <CallingIcon /> },
  { title: "Email", value: "itiano@gmail.com", icon: <EmailIcon /> },
];

const initialValues = {};

const ContactUsForm = () => {
  const onSubmit = async (values) => {
    console.log(values);
  };

  const formik = useFormik({
    onSubmit,
    initialValues,
    enableReinitialize: true,
  });
  return (
    <div className="flex-between-center flex-col sm:flex-row gap-10 shadow-lg p-10 w-full rounded-3xl bg-white">
      <div className="flex flex-col gap-6 w-full sm:w-auto">
        {ContactOptions.map((contact) => (
          <ContactElements key={contact.title} {...contact} />
        ))}
      </div>
      <form onSubmit={formik.handleSubmit} className="flex-1">
        <CustomInput formik={formik} label="Email" placeholder="info@gmail.com" />
        <CustomTextArea formik={formik} label="Message" placeholder="type here..." />
        <CustomBtn text="Send" arrowEndBtn className="px-0" />
      </form>
    </div>
  );
};

export default ContactUsForm;

const ContactElements = ({ icon, title, value }) => (
  <div className="flex-start-center gap-2">
    <span className="bg-gray-1 w-12 h-12 rounded-full centering">{icon}</span>
    <div>
      <p className="text-gray-3">{title}</p>
      <p className="font-semibold mt-1">{value}</p>
    </div>
  </div>
);
