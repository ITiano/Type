import { useCallback, useState } from "react";
import Link from "next/link";
import routes from "routes/routes";
import toast from "react-hot-toast";
import { useRouter } from "next/router";
// Yup
import { useForm } from "react-hook-form";
import { loginValidation } from "helper/Validations";
import { yupResolver } from "@hookform/resolvers/yup";
// Services
import { loginUser } from "services/auth/authApi";
// Seo
import { NextSeo } from "next-seo";
// Components
import GoogleIcon from "public/icons/GoogleIcon";
import TwitterIcon from "public/icons/TwitterIcon";
import CustomBtn from "components/utils/CustomBtn";
import CustomInput from "components/utils/CustomInput";

const defaultValues = { email: "", password: "" };

const Login = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const form = useForm({ defaultValues, resolver: yupResolver(loginValidation) });

  const onSubmit = useCallback(
    async (values) => {
      setLoading(true);
      loginUser(values)
        .then((res) => {
          localStorage.setItem("token", res?.token);
          toast.success("Login was successful :)");
          router.push(routes.home.path);
        })
        .finally(() => setLoading(false));
    },
    [router]
  );

  return (
    <>
      <NextSeo title="login" />
      <div className="bg-form centering py-[70px] px-[10px] min-h-[100svh]">
        <div className="form">
          <h1 className="text-3xl font-bold">Login</h1>
          <p className="text-xs opacity-40 mt-1 mb-6 font-medium">Please enter your email and password to login</p>
          <form className="flex flex-col" onSubmit={form.handleSubmit(onSubmit)}>
            <CustomInput name="email" label="Email" placeholder="info@gmail.com" form={form} />
            <CustomInput name="password" label="Password" placeholder="Enter your password" Password form={form} />
            <CustomBtn type="submit" text="log in" loading={loading} className="black-btn w-full mt-4" />
          </form>
          <LoginBottomForm />
        </div>
      </div>
    </>
  );
};

export default Login;

const LoginBottomForm = () => {
  return (
    <>
      <p className="mt-6 text-gray-3 flex-start-center gap-1">
        Don’t have an account ?
        <Link className="text-mainBlue font-semibold" href={routes.signup.path}>
          {routes.signup.title}
        </Link>
      </p>
      <Link className="text-mainBlue font-semibold mt-3 inline-block" href="#">
        Forget password
      </Link>
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
