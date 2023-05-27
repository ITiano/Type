import Link from "next/link";
import routes from "routes/routes";
import toast from "react-hot-toast";
import { useRouter } from "next/router";

// Yup and formik
import { registerValidation } from "helper/Validations";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

// Seo
import { NextSeo } from "next-seo";

// hooks
import useViewport from "hooks/useViewport";

// Components
import GoogleIcon from "public/icons/GoogleIcon";
import TwitterIcon from "public/icons/TwitterIcon";
import CustomBtn from "components/utils/CustomBtn";
import CustomInput from "components/utils/CustomInput";

import { useRegisterUserMutation } from "services/authApi";

const defaultValues = { email: "", password: "", confirmPassword: "" };

const Signup = () => {
  const router = useRouter();
  const { height: minHeight } = useViewport("px");
  const [register, { isLoading }] = useRegisterUserMutation();

  const form = useForm({
    defaultValues,
    resolver: yupResolver(registerValidation),
  });

  const onSubmit = async (values) => {
    let { data } = await register(values);
    if (data) {
      toast.success("Register was successful");
      router.push(routes.home.path);
    }
  };

  return (
    <>
      <NextSeo title="Sign up" />
      <div style={{ minHeight }} className="bg-form centering py-[70px] px-[10px]">
        <div className="form">
          <h1 className="text-3xl font-bold">Sign up</h1>
          <p className="text-xs opacity-40 mt-1 mb-6 font-medium">Please enter your email and password to login</p>
          <form className="flex flex-col" onSubmit={form.handleSubmit(onSubmit)}>
            <CustomInput name="email" label="Email" placeholder="info@gmail.com" form={form} />
            <CustomInput name="password" label="Password" placeholder="Enter your password" Password form={form} />
            <CustomInput name="confirmPassword" label="Confirm Password" placeholder="Enter your confirm password" Password form={form} />
            <CustomBtn type="submit" text="log in" loading={isLoading} className="black-btn w-full mt-4" />
          </form>
          <SignUpBottomForm />
        </div>
      </div>
    </>
  );
};

export default Signup;

const SignUpBottomForm = () => {
  return (
    <>
      <p className="mt-6 text-gray-3 flex-start-center gap-1">
        Do you have an account?
        <Link className="text-mainBlue font-semibold" href={routes.login.path}>
          {routes.login.title}
        </Link>
      </p>
      <div className="w-full centering gap-2 mt-6">
        <span className="h-px bg-gray-3 flex-1"></span>
        <span>Or continue with</span>
        <span className="h-px bg-gray-3 flex-1"></span>
      </div>
      <div className="centering gap-3 mt-6">
        <span className="w-12 h-12 centering rounded-full bg-gray-100 cursor-pointer">
          <GoogleIcon />
        </span>
        <span className="w-12 h-12 centering rounded-full bg-gray-100 cursor-pointer">
          <TwitterIcon />
        </span>
      </div>
    </>
  );
};
