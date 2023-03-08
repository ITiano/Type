import React from "react";

// hooks
import useViewport from "hooks/useViewport";

// components
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

const Layout = ({ children }) => {
  const { height: minHeight } = useViewport("px");

  return (
    <div style={{ minHeight }} className="flex flex-col">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
