// Global css
import "../styles/App.css";

// SEO
import SEO from "next-seo.config";
import { DefaultSeo } from "next-seo";

// Layout components
import Header from "components/layout/Header/Header";
import Footer from "components/layout/Footer";
import useViewport from "hooks/useViewport";

// Apollo client
import { ApolloProvider } from "@apollo/client";
import client from "graphql/client";

const MyApp = ({ Component, pageProps }) => {
  const { height: minHeight } = useViewport("px");

  return (
    <ApolloProvider client={client}>
      <DefaultSeo {...SEO} />
      {Component.disableLayout ? (
        <Component {...pageProps} />
      ) : (
        <div style={{ minHeight }} className="flex flex-col">
          <Header />
          <Component {...pageProps} />
          <Footer />
        </div>
      )}
    </ApolloProvider>
  );
};

export default MyApp;
