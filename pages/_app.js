// Global css
import "../styles/App.css";

// SEO
import SEO from "next-seo.config";
import { DefaultSeo } from "next-seo";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
