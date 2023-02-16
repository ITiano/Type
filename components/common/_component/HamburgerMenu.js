import { useState } from "react";
import TopNavElements from "./TopNavElements";
import MenuBarIcon from "public/icons/MenuBarIcon";

const HamburgerMenu = () => {
  const [OpenMenu, setOpenMenu] = useState(false);

  if (typeof window !== "undefined") {
    if (OpenMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }

  const handleBlur = (e) => {
    if (!e.currentTarget.contains(e.relatedTarget)) setOpenMenu(false);
  };

  return (
    <>
      <button onBlur={handleBlur} className="md:hidden">
        <span onClick={() => setOpenMenu(true)}>
          <MenuBarIcon className="cursor-pointer " />
        </span>
        <div className={`fixed lg:hidden top-0 bg-white w-72 z-50 shadow-lg h-screen left-0 cursor-default  ${OpenMenu ? "opacity-100" : "opacity-0 hidden"}`}>
          <div className="flex flex-col px-5 py-8 gap-5">
            <TopNavElements title="Home" path="/" />
            <TopNavElements title="Guide" path="/guide" />
            <TopNavElements title="Courses" path="/courses" />
            <TopNavElements title="About us" path="/about_us" />
            <TopNavElements title="Contact us" path="/contact_us" />
          </div>
        </div>
      </button>
      {setOpenMenu && (
        <div className={` ${OpenMenu ? "opacity-100" : "opacity-0 hidden"}`}>
          <div className="fixed md:hidden inset-0 z-40 bg-black bg-opacity-30 backdrop-blur-sm"></div>
        </div>
      )}
    </>
  );
};

export default HamburgerMenu;
