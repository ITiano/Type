import ArrowDownIcon from "public/icons/ArrowDownIcon";
import UserIcon from "public/icons/UserIcon";
import React, { useState } from "react";
import ActivityModal from "./ActivityModal";
import HamburgerMenu from "./HamburgerMenu";
import { useAuth } from "src/context/AuthContextProvider";

const UserProfile = ({ navItems }) => {
  const [user] = useAuth();
  const [OpenModal, setOpenModal] = useState(false);

  const handleBlur = (e) => !e.currentTarget.contains(e.relatedTarget) && setOpenModal(false);

  return (
    <div className="flex-start-center gap-1">
      <button onBlur={handleBlur} className="relative">
        <span onClick={() => setOpenModal(!OpenModal)}>
          <ArrowDownIcon className={`${OpenModal && "rotate-180"} transition-all duration-500`} />
        </span>
        <ActivityModal open={OpenModal} />
      </button>
      <UserIcon className="w-10" />
      <HamburgerMenu navItems={navItems} />
    </div>
  );
};

export default UserProfile;
