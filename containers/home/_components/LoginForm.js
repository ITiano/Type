import CustomBtn from "components/utils/CustomBtn";
import CustomChkbox from "components/utils/CustomChkbox";
import CustomInput from "components/utils/CustomInput";
import { useFormik } from "formik";
import PasswordIcon from "public/icons/PasswordIcon";
import UserIcon from "public/icons/UserIcon";
import UsersIcon from "public/icons/UsersIcon";
import * as yup from "yup";

const LoginForm = () => {
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
    <div className="cart-container centering flex-col py-16 px-10 w-80 rounded-3xl">
      <UsersIcon />
      <p className="text-white text-lg mb-6">Login user</p>
      <CustomInput formik={formik} name="email" placeholder="Email " className="placeholder-white" startIcon={<UserIcon />} />
      <CustomInput formik={formik} name="password" placeholder="Password " className="placeholder-white" startIcon={<PasswordIcon />} />
      <div className="flex-between-center w-full mt-6">
        <CustomChkbox label="Remember me" />
        <p className="text-xs text-white cursor-pointer">Forgot password?</p>
      </div>
      <CustomBtn text="Login" className="full-white-btn w-full mt-3" parentClassName="w-full" />
      <CustomBtn text="Create an account" className="line-white-btn" />
    </div>
  );
};

export default LoginForm;
