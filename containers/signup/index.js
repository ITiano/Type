import * as yup from "yup";
import { useFormik } from "formik";
import CustomBtn from "components/utils/CustomBtn";
import CustomInput from "components/utils/CustomInput";
import GoogleIcon from "public/icons/GoogleIcon";
import TwitterIcon from "public/icons/TwitterIcon";
import Link from "next/link";

const initialValues = { email: "", password: "", confirmPassword: "" };

const SingUpContainer = () => {
  const validation = yup.object({
    email: yup.string().required("ایمیل نمی تواند خالی باشد ").email("لطفا ایمیل را به صورت کامل و صحیح وارد کنید"),
    password: yup
      .string()
      .required("رمز عبور نمی تواند خالی باشد")
      .matches(/^(?=.*[a-z])/, "رمز عبور باید داری حداقل یک حرف کوچک لاتین باشد")
      .matches(/^(?=.*[A-Z])/, "رمز عبور باید داری حداقل یک حرف بزرگ لاتین باشد")
      .matches(/^(?=.*[0-9])/, "رمز عبور باید دارای حداقل یک عدد باشد")
      .min(8, "رمز عبور نمی تواند کمتر از 8 کاراکتر باشد")
      .max(64, "رمز عبور نمی تواند بیشتر از 64 کاراکتر باشد"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "تایید رمز عبور با رمز عبور برابر نیست")
      .required("تایید رمز عبور نمی تواند خالی باشد"),
  });

  const onSubmit = async (values) => {};

  const formik = useFormik({
    onSubmit,
    initialValues,
    enableReinitialize: true,
    validationSchema: validation,
  });

  return (
    <div className="frame-letter">
      <form onSubmit={formik.handleSubmit} className="form">
        <h2 className="text-3xl font-bold">Sign Up</h2>
        <p className="text-xs opacity-50 mt-1 mb-6">Please enter your email and password to sign up.</p>
        <CustomInput formik={formik} name="email" label="Email " placeholder="info@gmail.com" />
        <CustomInput formik={formik} name="password" label="Password " placeholder="Enter your password" Password />
        <CustomInput formik={formik} name="confirmPassword" label="confirm pass " placeholder="Enter your password" Password />
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
