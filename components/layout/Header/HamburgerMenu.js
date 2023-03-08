import { useEffect, useRef, useState } from "react";
import MenuBarIcon from "public/icons/MenuBarIcon";
import useViewport from "hooks/useViewport";
import NavItem from "./NavItem";

const HamburgerMenu = ({ navItems }) => {
  const menuRef = useRef();
  const [open, setOpen] = useState(false);
  const { height: minHeight } = useViewport("px");

  const closeHandler = (e) => !menuRef.current.contains(e.target) && setOpen(false);

  useEffect(() => {
    if (typeof window !== "undefined") document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <div className="md:hidden">
      <button onClick={() => setOpen(true)}>
        <MenuBarIcon className="cursor-pointer" />
      </button>

      <div
        ref={menuRef}
        style={{ minHeight }}
        className={`fixed top-0 left-0 max-w-[230px] w-full bg-white z-50 flex flex-col gap-4 transition-all duration-300 p-4 pt-10 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {navItems.map((navItem) => (
          <NavItem key={navItem.path} navItem={navItem} setOpen={setOpen} />
        ))}
      </div>

      <div
        style={{ minHeight }}
        onClick={closeHandler}
        className={`fixed top-0 left-0 w-full bg-black/10 transition-all duration-300 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      ></div>
    </div>
  );
};

export default HamburgerMenu;
