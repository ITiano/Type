import * as yup from "yup";
import { useFormik } from "formik";
import CustomBtn from "components/utils/CustomBtn";
import CustomInput from "components/utils/CustomInput";
import CustomCheckbox from "components/utils/CustomCheckbox";
import GoogleIcon from "public/icons/GoogleIcon";
import TwitterIcon from "public/icons/TwitterIcon";
import Link from "next/link";

const initialValues = { email: "", password: "", remember: false };

const LoginContainer = () => {
  const validation = yup.object({
    email: yup.string().required("ایمیل نمی تواند خالی باشد").email("لطفا ایمیل را به صورت کامل و صحیح وارد کنید"),

    password: yup
      .string()
      .required("رمز عبور نمی تواند خالی باشد")
      .min(8, "رمز عبور نمی تواند کمتر از 8 کاراکتر باشد ")
      .max(64, "رمز عبور نمی تواند بیشتر از 64 کاراکتر باشد"),

    remember: yup.boolean(),
  });

  const onSubmit = async (values) => {};

  const formik = useFormik({
    onSubmit,
    initialValues,
    validationSchema: validation,
    enableReinitialize: true,
  });

  return (
    <div className="frame-letter">
      <form onSubmit={formik.handleSubmit} className="form">
        <h2 className="text-3xl font-bold">Log In</h2>
        <p className="text-xs opacity-50 mt-1 mb-6">Please enter your email and password to login.</p>
        <CustomInput formik={formik} name="email" label="Email " placeholder="info@gmail.com" />
        <CustomInput formik={formik} name="password" label="Password " placeholder="Enter your password" Password />
        <CustomCheckbox label="Remember me" name="remember" />
        <CustomBtn type="submit" text="log in" className="black-btn w-full mt-8" />
        <p className="mt-6 text-mainGray flex-start-center gap-1">
          <span>{"Don't have an account?"}</span>
          <Link className="text-mainBlue font-semibold" href="/signup">
            Sign Up
          </Link>
        </p>
        <p className="text-mainBlue"></p>
        <Link className="text-mainBlue font-semibold" href="/forgot_password">
          Forgot password
        </Link>
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

export default LoginContainer;
