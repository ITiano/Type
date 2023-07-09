import React, { useMemo, useState } from "react";
import HamburgerMenu from "./HamburgerMenu";
import { useAuth } from "src/context/AuthContextProvider";
import Link from "next/link";
import Spinner from "@components/utils/Spinner";
import routes from "@routes/routes";
import ActivityModal from "./ActivityModal";
import { ArrowDownIcon, ArrowRightIcon, UserIcon } from "@assets/icons/icons";

const UserProfile = ({ navItems }) => {
  const [user] = useAuth();
  const [openModal, setOpenModal] = useState(false);

  const { email, lastName, firstName } = useMemo(() => {
    const email = user?.email;
    const firstName = user?.user_metadata?.firstName;
    const lastName = user?.user_metadata?.lastName;
    return { email, firstName, lastName };
  }, [user?.email, user?.user_metadata?.firstName, user?.user_metadata?.lastName]);

  const onBlur = (e) => !e.currentTarget.contains(e.relatedTarget) && setOpenModal(false);

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
        <div className="flex-start-center gap-2">
          {/* <button onBlur={onBlur} className="relative">
            <span onClick={() => setOpenModal(!openModal)}>
              <ArrowDownIcon className={`${openModal && "rotate-180"} transition`} />
            </span>
            <ActivityModal open={openModal} />
          </button> */}
          <p>{email}</p>
          <Link href={routes.profile.path}>
            <UserIcon className="w-10" />
          </Link>
        </div>
      )}
      <HamburgerMenu navItems={navItems} />
    </div>
  );
};

export default UserProfile;
