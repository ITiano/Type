import SingUpContainer from "containers/signup";
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
