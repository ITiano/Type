import LogoTypiano from "@assets/vectors/LogoTypiano";
import routes from "@routes/routes";
import Link from "next/link";
import React from "react";

const navItems = [routes.courses, routes.aboutUs, routes.contactUs];

const years = new Date().getFullYear();

const Footer = () => {
  return (
    <div className="mt-auto">
      <div className="h-24 bg-rectangle"></div>
      <footer className="pb-6 mt-auto bg-gray-700">
        <div className="max-w-layout pt-6 pb-2">
          <LogoTypiano className="text-dark-900 font-bold mb-4" />
          <div className="centering flex-wrap gap-8 py-4 border-b-2">
            {navItems.map((element) => (
              <Link className="text-gray-900" href={element.path} key={element.path}>
                {element.title}
              </Link>
            ))}
          </div>
          <p className="text-gray-900 text-xs mt-8 text-center tracking-widest">&copy; {years} Itiano, All rights reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
