import SingUpContainer from "containers/signup/Signup";
import { NextSeo } from "next-seo";

const index = () => {
  return (
    <>
      <NextSeo title="Sign up" />
      <SingUpContainer />
    </>
  );
};

export default index;
