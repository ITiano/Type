"use client";

import React, { useEffect, useState } from "react";
import routes from "@routes/routes";
import Navbar from "./Navbar";
import UserProfile from "./UserProfile";
import LogoTypiano from "@assets/vectors/LogoTypiano";

const navItems = [routes.home, routes.courses, routes.aboutUs, routes.contactUs];

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
      className={`fixed w-full h-[64px] top-0 left-1/2 -translate-x-1/2 z-50 transition ${
        scrollData.offsetY ? "bg-white/40 backdrop-blur-md shadow" : "bg-transparent"
      } ${scrollData.isScrollingDown ? "-translate-y-full" : "-translate-y-0"}`}
    >
      <div className="layout-max-w flex-between-center p-3 md:px-4">
        <LogoTypiano className="text-dark-900 font-bold text-center text-base" />
        <Navbar navItems={navItems} />
        <UserProfile navItems={navItems} />
      </div>
    </header>
  );
};

export default Header;
