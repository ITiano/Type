import "../styles/App.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      {Component.TopNav && <Component.TopNav />}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
