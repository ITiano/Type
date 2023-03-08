// Apollo client
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

// Global css
import "../styles/App.css";

// SEO
import { DefaultSeo } from "next-seo";
import SEO from "next-seo.config";

// Layout components
import Layout from "components/layout/Layout";

const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_GRAPH_CMS_API,
  cache: new InMemoryCache(),
});

const MyApp = ({ Component, pageProps }) => {
  return (
    <ApolloProvider client={client}>
      <DefaultSeo {...SEO} />
      {Component.disableLayout ? (
        <Component {...pageProps} />
      ) : (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
    </ApolloProvider>
  );
};

export default MyApp;
