// Global css
import "../styles/App.css";

// SEO
import { DefaultSeo } from "next-seo";
import SEO from "next-seo.config";

// Layout components
import Layout from "layout/Layout";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <DefaultSeo {...SEO} />
      {Component.disableLayout ? (
        <Component {...pageProps} />
      ) : (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
    </>
  );
};

export default MyApp;
