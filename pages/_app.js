// Global css
import "../styles/App.css";

// SEO
import SEO from "next-seo.config";
import { DefaultSeo } from "next-seo";

// toolkit
import { store } from "redux/store";
import { Provider } from "react-redux";

// Toaster
import { Toaster } from "react-hot-toast";

const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
      <Toaster toastOptions={{ error: { iconTheme: { primary: "#E35757" } }, success: { iconTheme: { primary: "#8FE357" } } }} />
    </Provider>
  );
};

export default MyApp;
