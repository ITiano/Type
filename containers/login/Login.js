import * as yup from "yup";
import { useFormik } from "formik";
import Link from "next/link";
import FormLayout from "components/layout/FormLayout";
import { useState } from "react";

const initialValues = { email: "", password: "", remember: false };

const LoginContainer = () => {
  const [loading, setLoading] = useState(false);

  const validation = yup.object({
    email: yup.string().required("Email cannot be empty").email("Please enter the email completely and correctly"),

    password: yup
      .string()
      .required("Password cannot be empty")
      .min(8, "Password cannot be less than 8 characters")
      .max(64, "Password cannot be longer than 64 characters"),

    remember: yup.boolean(),
  });

  const onSubmit = async (values) => {
    console.log(values);
  };

  const formik = useFormik({
    onSubmit,
    initialValues,
    validationSchema: validation,
    enableReinitialize: true,
  });

  const options = [
    { formType: "input", name: "email", label: "Email ", placeholder: "info@gmail.com" },
    {
      formType: "input",
      name: "password",
      label: "Password ",
      placeholder: "Enter your password",
      Password: true,
    },
    { formType: "checkbox", label: "Remember me", name: "remember" },
  ];

  return (
    <FormLayout
      title="Log In"
      description="Please enter your email and password to login."
      buttonText="log in"
      options={options}
      formik={formik}
      loading={loading}
    >
      <p className="mt-6 flex-start-center gap-1 mb-2">
        <span>{"Don't have an account?"}</span>
        <Link className="navigate" href="/signup">
          Sign Up
        </Link>
      </p>
      <Link className="navigate" href="/forgot_password">
        Forgot password
      </Link>
    </FormLayout>
  );
};

export default LoginContainer;
