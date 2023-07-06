// Global css
import "../styles/App.css";
// SEO
import SEO from "next-seo.config";
import { DefaultSeo } from "next-seo";
// Toaster
import { Toaster } from "react-hot-toast";
// Services
import { getUserData } from "services/auth/authApi";
// Next-progress
import NextNProgress from "nextjs-progressbar";
// Context
import AuthContextProvider, { useAuth } from "context/AuthContextProvider";
import { useEffect } from "react";

const MyApp = ({ Component, pageProps }) => {
  return (
    <AuthContextProvider>
      <UserProvider>
        <DefaultSeo {...SEO} />
        <Component {...pageProps} />
        <NextNProgress height={3} color="#aae6f0" options={{ showSpinner: false }} />
        <Toaster
          toastOptions={{ error: { iconTheme: { primary: "#E35757" } }, success: { iconTheme: { primary: "#8FE357" } } }}
        />
      </UserProvider>
    </AuthContextProvider>
  );
};

export default MyApp;

const UserProvider = ({ children }) => {
  const [user, setUser] = useAuth();

  useEffect(() => {
    !user &&
      getUserData()
        .then((res) => setUser(res))
        .catch(() => null);
  }, [setUser, user]);

  return children;
};
