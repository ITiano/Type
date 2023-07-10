import React from "react";
import HamburgerMenu from "./HamburgerMenu";
import { useAuth } from "src/context/AuthContextProvider";
import Link from "next/link";
import Spinner from "@components/utils/Spinner";
import routes from "@routes/routes";
import { ArrowRightIcon, UserIcon } from "@assets/icons/icons";

const UserProfile = ({ navItems }) => {
  const [user] = useAuth();

  return (
    <div className="flex-end-center gap-1 w-[100px] h-[40px]">
      {user === "" ? (
        <div className="centering w-full">
          <Spinner className="w-4 h-4 !fill-black" />
        </div>
      ) : user === null ? (
        <Link href={routes.auth.path}>
          <div className="flex-start-center gap-2">
            <span className="font-medium text-black text-sm">Register</span>
            <ArrowRightIcon />
          </div>
        </Link>
      ) : (
        <Link className="flex-start-center gap-2" href={routes.profile.path}>
          <UserIcon className="w-10 border-2 border-primary-900 rounded-full" />
        </Link>
      )}
      <HamburgerMenu navItems={navItems} />
    </div>
  );
};

export default UserProfile;
