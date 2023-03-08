import React from "react";

// Layout components
import Footer from "./Footer";
import Header from "./Header/Header";

// hooks
import useViewport from "hooks/useViewport";

const PageLayout = ({ className, children, disableHeader, disableFooter }) => {
  const { height: minHeight } = useViewport("px");

  return (
    <div style={{ minHeight }} className="flex flex-col">
      {!disableHeader && <Header />}
      <main className={`layout-max-w mt-[65px] mb-[35px] ${className}`}>{children}</main>
      {!disableFooter && <Footer />}
    </div>
  );
};

export default PageLayout;
