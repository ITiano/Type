import CustomBtn from "components/utils/CustomBtn";
import CustomInput from "components/utils/CustomInput";
import CustomTextArea from "components/utils/CustomTextArea";
import { useFormik } from "formik";
import CallingIcon from "public/icons/CallingIcon";
import EmailIcon from "public/icons/EmailIcon";
import LocationIcon from "public/icons/LocationIcon";

const initialValues = {};

const ContactUsContainer = () => {
  const ContactOptions = [
    { title: "Location", value: "Any where", icon: <LocationIcon /> },
    { title: "Phone", value: "+98 912 485 8925", icon: <CallingIcon /> },
    { title: "Email", value: "itiano@gmail.com", icon: <EmailIcon /> },
  ];

  const ContactElements = ({ contact }) => (
    <div className="flex-start-center gap-2">
      <span className="bg-gray-1 w-12 h-12 rounded-full centering">{contact.icon}</span>
      <div>
        <p className="text-gray-3">{contact.title}</p>
        <p className="font-semibold mt-1">{contact.value}</p>
      </div>
    </div>
  );

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
    <div className="centering px-3 mt-20">
      <div>
        <h2 className="font-bold text-2xl text-center mb-5">Get in touch</h2>
        <p className="text-center">Contact Us for quote, help or collaboration</p>
        <div className="mt-8 custom-shadow-1 p-10 w-full rounded-3xl sm:flex-between-start bg-white">
          <div className="flex flex-col gap-7">
            {ContactOptions.map((contact, index) => (
              <ContactElements key={index} contact={contact} />
            ))}
          </div>
          <div className="mt-7 sm:mt-0 sm:w-6/12">
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
