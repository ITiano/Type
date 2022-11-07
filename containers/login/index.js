import * as yup from "yup";
import { useFormik } from "formik";
import CustomInput from "../../components/utils/CustomInput";
import CustomBtn from "../../components/utils/CustomBtn";

const LoginContainer = () => {
  const validation = yup.object({
    email: yup.string().email().required(),
    password: yup.string().required(),
  });

  const handleSubmit = async (values) => {
    //   try {
    //     setLoading(true)
    //     const res = await getUserData(values.nationalId , values.code)
    //     if(res.data.data){
    //       dispatch(StoreUserInfoRedux(res.data.data))
    //       Router.push('/signup/info')
    //       swiper.slideNext()
    //     }
    //   } catch (error) {
    //     console.log(error)
    //   } finally {
    //     setLoading(false)
    // }
  };

  // .min(8, stringValueInserter(errorHelpers.maxStrictChar, 10))

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
    <div className="login">
      <div className="w-72 rounded-lg p-5" style={{ background: "rgba(255, 255, 255, 0.2)" }}>
        <p className="text-center text-white mb-3 text-lg">Login form</p>
        <CustomInput formik={formik} name="email" label="Email " />
        <CustomInput formik={formik} name="password" label="Password " />
        <CustomBtn text="Login" className="main-btn" />
      </div>
    </div>
  );
};

export default LoginContainer;
