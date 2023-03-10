import React, { useState } from "react";

// Yup and formik
import * as Yup from "yup";
import { useFormik } from "formik";

// hooks
import useViewport from "hooks/useViewport";

// Components
import CustomBtn from "components/utils/CustomBtn";
import CustomInput from "components/utils/CustomInput";
import CustomCheckbox from "components/utils/CustomCheckbox";

const initialValues = {
  email: "",
  password: "",
  remember: true,
};

const validationSchema = Yup.object({
  email: Yup.string().required("Email is a required property").email("Please enter a valid email"),
  password: Yup.string()
    .required("password is a required property")
    .min(8, "Password must be at least 8 characters")
    .max(64, "Password cant be longer than 64 characters"),
});

const Login2 = () => {
  const [loading, setLoading] = useState(false);
  const { height: minHeight } = useViewport("px");

  const onSubmit = (values) => {
    // setLoading(true);
    console.log(values);
  };

  const formik = useFormik({ initialValues, onSubmit, validationSchema, validateOnMount: true });

  return (
    <div style={{ minHeight }} className="bg-form centering py-[70px] px-[10px]">
      <div className="form">
        <h1 className="text-3xl font-bold">Login</h1>
        <p className="text-xs opacity-40 mt-1 mb-6 font-medium">Please enter your email and password to login</p>
        <form className="flex flex-col" onSubmit={formik.handleSubmit}>
          <CustomInput name="email" label="Email" placeholder="info@gmail.com" formik={formik} />
          <CustomInput name="password" label="Password" placeholder="Enter your password" Password formik={formik} />
          <div className="pt-4">
            <CustomCheckbox name="remember" label="Remember me" formik={formik} />
          </div>
          <CustomBtn type="submit" text="log in" className="black-btn w-full mt-4" loading={loading} disabled={!formik.isValid} />
        </form>
      </div>
    </div>
  );
};

export default Login2;
