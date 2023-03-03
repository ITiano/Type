import * as yup from "yup";
import { useFormik } from "formik";
import Link from "next/link";
import FormLayout from "components/layout/FormLayout";
import { useState } from "react";

const initialValues = { email: "", password: "", confirmPassword: "" };

const SingUpContainer = () => {
  const [loading, setLoading] = useState(false);

  const validationSchema = yup.object({
    email: yup.string().required("Email cannot be empty").email("Please enter the email completely and correctly"),

    password: yup
      .string()
      .required("Password cannot be empty")
      .min(8, "Password cannot be less than 8 characters")
      .max(64, "Password cannot be longer than 64 characters"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Confirm password is not the same as password")
      .required("Confirm password cannot be empty"),
  });

  const onSubmit = async (values) => {
    console.log(values);
  };

  const formik = useFormik({
    onSubmit,
    initialValues,
    validationSchema,
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
    {
      formType: "input",
      name: "confirmPassword",
      label: "Confirm Password",
      placeholder: "Enter your Confirm Password",
      Password: true,
    },
  ];

  return (
    <FormLayout
      title="Sign Up"
      description="Please enter your email and password to sign up."
      buttonText="log in"
      options={options}
      formik={formik}
      loading={loading}
    >
      <p className="mt-6 text-gray-3 flex-start-center gap-1">
        Do you have an account?
        <Link className="text-mainBlue font-semibold" href="/login">
          Log In
        </Link>
      </p>
    </FormLayout>
  );
};

export default SingUpContainer;
