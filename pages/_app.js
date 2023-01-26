import "../styles/App.css";
import { DefaultSeo } from "next-seo";
import SEO from "next-seo.config";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo {...SEO} />
      {Component.TopNav && <Component.TopNav />}
      <Component {...pageProps} />
      {Component.Footer && <Component.Footer />}
    </>
  );
}

export default MyApp;
