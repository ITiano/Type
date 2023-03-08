import React, { useEffect, useState } from "react";
import routes from "routes/routes";
import Navbar from "./Navbar";
import UserProfile from "./UserProfile";

const navItems = [routes.home, routes.guide, routes.courses, routes.aboutUs, routes.contactUs];

const Header = () => {
  const [scrollData, setScrollData] = useState({ offsetY: 0, isScrollingDown: false });

  useEffect(() => {
    if (typeof window !== undefined) {
      const updateScrollData = () => {
        const offsetY = window.scrollY;
        setScrollData({ offsetY, isScrollingDown: offsetY > scrollData.offsetY });
      };
      window.addEventListener("scroll", updateScrollData);
      return () => window.removeEventListener("scroll", updateScrollData);
    }
  }, [scrollData.offsetY]);

  return (
    <header
      className={`fixed w-full h-[64px] top-0 left-1/2 -translate-x-1/2 z-50 transition-all duration-[250ms] ${
        scrollData.offsetY ? "bg-white/40 backdrop-blur-md shadow" : "bg-transparent"
      } ${scrollData.isScrollingDown ? "-translate-y-full" : "-translate-y-0"}`}
    >
      <div className="layout-max-w flex-between-center p-3 md:px-4">
        <h2 className="text-dark font-bold text-center text-base">Typiano</h2>
        <Navbar navItems={navItems} />
        <UserProfile navItems={navItems} />
      </div>
    </header>
  );
};

export default Header;
