import React from "react";
import NavItem from "./NavItem";

const Navbar = ({ navItems }) => {
  return (
    <nav className="gap-3 hidden md:flex">
      {navItems.map((navItem) => (
        <NavItem key={navItem.path} navItem={navItem} />
      ))}
    </nav>
  );
};

export default Navbar;
