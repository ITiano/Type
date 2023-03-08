import { useState } from "react";
import UserIcon from "public/icons/UserIcon";
import ArrowDownIcon from "public/icons/ArrowDownIcon";
import ActivityModal from "./ActivityModal";
import HamburgerMenu from "./HamburgerMenu";
import TopNavElements from "./TopNavElements";

const TopNav = ({ className = "" }) => {
  const [OpenModal, setOpenModal] = useState(false);

  const handleBlur = (e) => {
    if (!e.currentTarget.contains(e.relatedTarget)) setOpenModal(false);
  };

  return (
    <header className={`"px-2 py-4 bg-transparent z-30 w-full" ${className}`}>
      <nav className="max-w-6xl mx-auto flex-between-center px-4">
        <h2 className="text-dark font-bold text-center text-base">Typiano</h2>
        <nav className="hidden md:flex-between-center gap-5 ">
          <TopNavElements title="Home" path="/" />
          <TopNavElements title="Guide" path="/guide" />
          <TopNavElements title="Courses" path="/courses" />
          <TopNavElements title="About us" path="/about_us" />
          <TopNavElements title="Contact us" path="/contact_us" />
          <span className=""></span>
        </nav>
        <div className="flex-end-center gap-1">
          <button onBlur={handleBlur} className=" relative">
            <span onClick={() => setOpenModal(!OpenModal)}>
              <ArrowDownIcon className={`${OpenModal && "rotate-180"} transition-all duration-500 `} />
            </span>
            <ActivityModal open={OpenModal} />
          </button>
          <UserIcon className="w-10" />
          <HamburgerMenu />
        </div>
      </nav>
    </header>
  );
};

export default TopNav;
