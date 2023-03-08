import React from "react";
import PageLayout from "layout/PageLayout";

const elements = ["Product", "Features", "Pricing", "Resources", "Careers", "Help", "Privacy"];

const Footer = () => {
  return (
    <footer className="bg-gray-2 pb-6 mt-auto">
      <div className="h-24 bg-rectangle"></div>
      <PageLayout TagName="div" className="pt-10">
        <h2 className="text-dark font-bold text-center text-xl">Typiano</h2>
        <div className="centering flex-wrap gap-8 py-4 border-b-2">
          {elements.map((element) => (
            <p className="text-gray-4" key={element}>
              {element}
            </p>
          ))}
        </div>
        <p className="text-gray-4 text-xs mt-8 text-center tracking-widest">&copy; 2023 Itiano, All rights reserved</p>
      </PageLayout>
    </footer>
  );
};

export default Footer;
