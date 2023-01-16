import LoginContainer from "containers/login/Login";
import { NextSeo } from "next-seo";

const index = () => {
  return (
    <>
      <NextSeo title="login" />
      <LoginContainer />
    </>
  );
};

export default index;
