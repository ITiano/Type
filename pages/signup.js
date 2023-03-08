import SingUpContainer from "containers/signup/Signup";
import { NextSeo } from "next-seo";

const Signup = () => {
  return (
    <>
      <NextSeo title="Sign up" />
      <SingUpContainer />
    </>
  );
};

export default Signup;
