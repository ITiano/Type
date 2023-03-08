import CustomBtn from "components/utils/CustomBtn";
import CustomInput from "components/utils/CustomInput";
import CustomTextArea from "components/utils/CustomTextArea";
import { useFormik } from "formik";
import CallingIcon from "public/icons/CallingIcon";
import EmailIcon from "public/icons/EmailIcon";
import LocationIcon from "public/icons/LocationIcon";

const initialValues = {};

const ContactOptions = [
  { title: "Location", value: "Any where", icon: <LocationIcon /> },
  { title: "Phone", value: "+98 912 345 6789", icon: <CallingIcon /> },
  { title: "Email", value: "itiano@gmail.com", icon: <EmailIcon /> },
];

const ContactUsContainer = () => {
  const onSubmit = async (values) => {
    console.log(values);
  };

  const formik = useFormik({
    onSubmit,
    initialValues,
    // validationSchema: validation,
    enableReinitialize: true,
  });

  return (
    <div className="centering w-full px-4">
      <div className="w-full max-w-3xl mx-auto">
        <h2 className="font-bold text-2xl text-center mb-5">Get in touch</h2>
        <p className="text-center mb-8">Contact Us for quote, help or collaboration</p>
        <div className="flex-between-center flex-col sm:flex-row gap-10 custom-shadow-1 p-10 w-full rounded-3xl bg-white">
          <div className="flex flex-col gap-6 w-full sm:w-auto">
            {ContactOptions.map((contact, index) => (
              <ContactElements key={index} contact={contact} />
            ))}
          </div>
          <div className="flex-1 mx-auto w-full sm:max-w-sm">
            <CustomInput formik={formik} label="Email" placeholder="info@gmail.com" />
            <CustomTextArea formik={formik} label="Message" placeholder="type here..." />
            <CustomBtn text="Send" arrowEndBtn className="px-0" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsContainer;

const ContactElements = ({ contact }) => (
  <div className="flex-start-center gap-2">
    <span className="bg-gray-1 w-12 h-12 rounded-full centering">{contact.icon}</span>
    <div>
      <p className="text-gray-3">{contact.title}</p>
      <p className="font-semibold mt-1">{contact.value}</p>
    </div>
  </div>
);
