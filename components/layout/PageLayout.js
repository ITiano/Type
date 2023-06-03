import React, { Children } from "react";

// Layout components
import Footer from "./Footer";
import Header from "./Header/Header";
import CustomFade from "components/utils/CustomFade";

const PageLayout = ({ className, style, children, disableHeader, disableFooter }) => {

  return (
    <div className="flex flex-col min-h-[100svh]">
      {!disableHeader && <Header />}
      <main style={style} className={`layout-max-w p-layout pb-[50px] ${disableHeader ? "pt-[65px]" : "pt-[90px]"} ${className}`}>
        {Children.map(children, (child) => (
          <CustomFade>
            <div>{child}</div>
          </CustomFade>
        ))}
      </main>
      {!disableFooter && <Footer />}
    </div>
  );
};

export default PageLayout;
