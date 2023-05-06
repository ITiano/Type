// Global css
import "../styles/App.css";

// SEO
import SEO from "next-seo.config";
import { DefaultSeo } from "next-seo";

// toolkit
import { Provider } from "react-redux";
import { store } from "redux/store";

const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </Provider>
  );
};

export default MyApp;
