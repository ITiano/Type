import "../styles/App.css";
import { DefaultSeo } from "next-seo";
import SEO from "next-seo.config";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <div className={`${Component.TopNav && Component.Footer ? "min-h-screen flex flex-col justify-between" : ""}`}>
        {Component.TopNav && <Component.TopNav />}
        <Component {...pageProps} />
        {Component.Footer && <Component.Footer />}
      </div>
    </>
  );
}

export default MyApp;
