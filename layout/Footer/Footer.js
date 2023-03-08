import React from "react";
import PageLayout from "layout/PageLayout";

const elements = ["Product", "Features", "Pricing", "Resources", "Careers", "Help", "Privacy"];

const Footer = () => {
  return (
    <PageLayout TagName="footer" className="mt-auto">
      <div className="h-24 bg-rectangle"></div>
      <div className="bg-gray-2 pt-10 pb-6">
        <h2 className="text-dark font-bold text-center text-xl">Typiano</h2>
        <div className="centering flex-wrap gap-8 py-4 border-b-2">
          {elements.map((el) => (
            <p className="text-gray-4" key={el}>
              {el}
            </p>
          ))}
        </div>
        <p className="text-gray-4 text-xs mt-8 text-center tracking-widest">&copy; 2023 Itiano, All rights reserved</p>
      </div>
    </PageLayout>
  );
};

export default Footer;
