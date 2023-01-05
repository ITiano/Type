import * as yup from "yup";
import { useFormik } from "formik";
import CustomBtn from "components/utils/CustomBtn";
import CustomInput from "components/utils/CustomInput";
import GoogleIcon from "public/icons/GoogleIcon";
import TwitterIcon from "public/icons/TwitterIcon";
import { useRouter } from "next/router";
import Link from "next/link";

const SingUpContainer = () => {
  const router = useRouter();
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
        <h2 className="text-3xl font-bold">Sign Up</h2>
        <p className="text-xs opacity-50 mt-1 mb-6">Please enter your email and password to sign up.</p>
        <CustomInput formik={formik} name="email" label="Email " placeholder="info@gmail.com" />
        <CustomInput formik={formik} name="password" label="Password " placeholder="Enter your password" Password />
        <CustomInput formik={formik} name="password" label="confirm pass " placeholder="Enter your password" Password />
        <CustomBtn type="submit" text="sign up" className="black-btn w-full mt-8" />
        <p className="mt-6 text-mainGray flex-start-center gap-1">
          Do you have an account?
          <Link className="text-mainBlue font-semibold" href="/login">
            Log In
          </Link>
        </p>
        <div className="w-full centering mt-8">
          <span className="h-px bg-mainGray flex-1"></span>
          <span className="text-mainGray bg-[#fcfcfc] px-3">Or continue with</span>
          <span className="h-px bg-mainGray flex-1"></span>
        </div>
        <div className="mt-8 centering gap-4">
          <GoogleIcon />
          <TwitterIcon />
        </div>
      </form>
    </div>
  );
};

export default SingUpContainer;
