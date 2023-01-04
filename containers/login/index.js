import * as yup from "yup";
import { useFormik } from "formik";
import CustomBtn from "components/utils/CustomBtn";
import CustomInput from "components/utils/CustomInput";
import CustomChkbox from "components/utils/CustomChkbox";

const LoginContainer = () => {
  const validation = yup.object({
    email: yup.string().email().required(),
    password: yup.string().required(),
  });

  const handleSubmit = async (values) => {};

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    enableReinitialize: true,
    validationSchema: validation,
    onSubmit: handleSubmit,
  });

  return (
    <div className="frame-letter">
      <form onSubmit={formik.handleSubmit} className="form">
        <h2 className="text-3xl font-bold">Log In</h2>
        <p className="text-xs opacity-50 mt-1 mb-6">Please enter your email and password to login.</p>
        <CustomInput formik={formik} name="email" label="Email " placeholder="info@gmail.com" />
        <CustomInput formik={formik} name="password" label="Password " placeholder="Enter your password" Password />
        <CustomChkbox label="Remember me"/>
        <CustomBtn type="submit" text="log in" className="full-black-btn w-full mt-8" />
      </form>
    </div>
  );
};

export default LoginContainer;
