import { useEffect, useRef, useState } from "react";
import NavItem from "./NavItem";
import { MenuBarIcon } from "@assets/icons/icons";
import LogoTypiano from "@assets/vectors/LogoTypiano";

const HamburgerMenu = ({ navItems }) => {
  const menuRef = useRef();
  const [open, setOpen] = useState(false);

  const closeHandler = (e) => !menuRef.current.contains(e.target) && setOpen(false);

  useEffect(() => {
    if (typeof window !== "undefined") document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <div className="md:hidden">
      <button onClick={() => setOpen(true)} className="centering">
        <MenuBarIcon className="cursor-pointer" />
      </button>

      <div
        ref={menuRef}
        className={`max-h-screen h-screen overflow-auto fixed top-0 left-0 max-w-[250px] w-full bg-white z-50 flex flex-col gap-4 transition ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <LogoTypiano className="flex-start-center px-2 pt-2" />

        {navItems.map((navItem) => (
          <NavItem key={navItem.path} navItem={navItem} setOpen={setOpen} className="mx-2" />
        ))}

        <div className="h-[30%] bg-rectangle mt-auto"></div>
      </div>

      <div
        onClick={closeHandler}
        className={`max-h-screen h-screen fixed top-0 left-0 w-full backdrop-blur-sm bg-black/10 transition ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      ></div>
    </div>
  );
};

export default HamburgerMenu;
