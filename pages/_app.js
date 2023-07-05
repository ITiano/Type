// Global css
import "../styles/App.css";
// SEO
import SEO from "next-seo.config";
import { DefaultSeo } from "next-seo";
// toolkit
import { Provider } from "react-redux";
import { store } from "redux/store";
// Toaster
import { Toaster } from "react-hot-toast";
// Next-progress
import NextNProgress from "nextjs-progressbar";
// Context
import AuthContextProvider from "context/AuthContextProvider";

const MyApp = ({ Component, pageProps }) => {
  return (
    <AuthContextProvider>
      <Provider store={store}>
        <DefaultSeo {...SEO} />
        <Component {...pageProps} />
        <NextNProgress height={3} color="#aae6f0" options={{ showSpinner: false }} />
        <Toaster
          toastOptions={{ error: { iconTheme: { primary: "#E35757" } }, success: { iconTheme: { primary: "#8FE357" } } }}
        />
      </Provider>
    </AuthContextProvider>
  );
};

export default MyApp;
