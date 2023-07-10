import React from "react";

const elements = ["Product", "Features", "Pricing", "Resources", "Careers", "Help", "Privacy"];

const Footer = () => {
  const calcYear = () => new Date().getFullYear();

  return (
    <div className="mt-auto">
      <div className="h-24 bg-rectangle"></div>
      <footer className="pb-6 mt-auto bg-gray-700">
        <div className="layout-max-w pt-10 pb-2">
          <h2 className="text-dark-900 font-bold text-center text-xl">Typiano</h2>
          <div className="centering flex-wrap gap-8 py-4 border-b-2">
            {elements.map((element) => (
              <p className="text-gray-900" key={element}>
                {element}
              </p>
            ))}
          </div>
          <p className="text-gray-900 text-xs mt-8 text-center tracking-widest">
            &copy; {calcYear()} Itiano, All rights reserved
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
