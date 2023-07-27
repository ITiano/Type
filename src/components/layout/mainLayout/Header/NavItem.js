import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavItem = ({ navItem, setOpen, className }) => {
  const pathname = usePathname();

  return (
    <Link
      href={navItem.path}
      onClick={setOpen && (() => setOpen(false))}
      className={`px-4 py-3 md:px-3 md:py-1.5 font-semibold rounded-full ${
        pathname === navItem.path ? "text-dark-900 bg-primary-900" : "text-gray-900"
      } ${className}`}
    >
      {navItem.title}
    </Link>
  );
};

export default NavItem;
