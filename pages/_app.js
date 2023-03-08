// Global css
import "../styles/App.css";

// SEO
import SEO from "next-seo.config";
import { DefaultSeo } from "next-seo";

// Apollo client
import { ApolloProvider } from "@apollo/client";
import client from "graphql/client";

const MyApp = ({ Component, pageProps }) => {

  return (
    <ApolloProvider client={client}>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </ApolloProvider>
  );
};

export default MyApp;
