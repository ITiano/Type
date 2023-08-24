import React, { Children } from "react";
import CustomFade from "src/common/CustomFade";
import Footer from "src/app/(user)/components/Footer";
import Header from "src/app/(user)/components/Header/Header";

const MainLayout = ({ children }) => {
  return (
    <div>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="max-w-layout pb-[50px]">
          {Children.map(children, (child) => (
            <CustomFade>
              <div>{child}</div>
            </CustomFade>
          ))}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
