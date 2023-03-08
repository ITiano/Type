import LoginContainer from "containers/login/Login";
import { NextSeo } from "next-seo";

const Login = () => {
  return (
    <>
      <NextSeo title="login" />
      <LoginContainer />
    </>
  );
};

export default Login;

Login.disableLayout = true;
