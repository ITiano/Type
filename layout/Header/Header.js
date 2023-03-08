import PageLayout from "layout/PageLayout";
import React from "react";
import routes from "routes/routes";
import Navbar from "./Navbar";
import UserProfile from "./UserProfile";

const navItems = [routes.home, routes.guide, routes.courses, routes.aboutUs, routes.contactUs];

const Header = () => {
  return (
    <PageLayout TagName="header" className="!bg-transparent fixed top-0 left-1/2 -translate-x-1/2">
      <div className="flex-between-center p-4">
        <h2 className="text-dark font-bold text-center text-base">Typiano</h2>
        <Navbar navItems={navItems} />
        <UserProfile navItems={navItems} />
      </div>
    </PageLayout>
  );
};

export default Header;
