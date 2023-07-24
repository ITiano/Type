import React, { Children } from "react";
import CustomFade from "@components/utils/CustomFade";
import Footer from "@components/layout/mainLayout/Footer";
import Header from "@components/layout/mainLayout/Header/Header";

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
