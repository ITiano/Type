import React from "react";

// Layout components
import Footer from "./Footer";
import Header from "./Header/Header";

// hooks
import useViewport from "hooks/useViewport";

const PageLayout = ({ className, style, children, disableHeader, disableFooter }) => {
  const { height: minHeight } = useViewport("px");

  return (
    <div style={{ minHeight }} className="flex flex-col">
      {!disableHeader && <Header />}
      <main style={style} className={`layout-max-w p-layout pb-[50px] ${disableHeader ? "pt-[65px]" : "pt-[90px]"} ${className}`}>
        {children}
      </main>
      {!disableFooter && <Footer />}
    </div>
  );
};

export default PageLayout;
