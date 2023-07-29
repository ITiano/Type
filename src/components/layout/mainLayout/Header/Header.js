"use client";

import React, { useEffect, useRef, useState } from "react";
import routes from "@routes/routes";
import Navbar from "./Navbar";
import UserProfile from "./UserProfile";
import LogoTypiano from "@assets/vectors/LogoTypiano";
import toast from "react-hot-toast";

const navItems = [routes.home, routes.courses, routes.aboutUs, routes.contactUs];

const Header = () => {
  const [scroll, setScroll] = useState(0);
  const ref = useRef(window.scrollY);

  useEffect(() => {
    window.onscroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll === 0) setScroll(0);
      else if (ref.center > currentScroll) setScroll(1);
      else setScroll(-1);
      ref.center = currentScroll;
    };
  }, []);

  return (
    <header
      className={`fixed w-full h-[70px] top-0 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 md:px-4 ${
        scroll === 1
          ? "bg-white/40 backdrop-blur-md shadow -translate-y-0"
          : scroll === -1
          ? "-translate-y-full"
          : "bg-transparent -translate-y-0 !h-[60px]"
      }`}
    >
      <div className="max-w-layout flex-between-center px-3  h-full">
        <LogoTypiano className="text-dark-900 font-bold text-center text-base" />
        <Navbar navItems={navItems} />
        <UserProfile navItems={navItems} />
      </div>
    </header>
  );
};

export default Header;
