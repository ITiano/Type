import React from "react";
import HamburgerMenu from "./HamburgerMenu";
import { useAuth } from "src/context/AuthContextProvider";
import Link from "next/link";
import routes from "@routes/routes";
import { UserIcon } from "@assets/icons/icons";
import Skeleton from "@components/common/Skeleton";
import Image from "next/image";

const UserProfile = ({ navItems }) => {
  const [user] = useAuth();

  return (
    <div className="flex-end-center gap-1 h-[40px] w-[40px]">
      {user === "" ? (
        <div className="centering w-full">
          <Skeleton height={40} className="!rounded-full" />
        </div>
      ) : user === null ? (
        <span></span>
      ) : (
        <Link
          href={routes.profile.path}
          className="flex-start-center gap-2 min-w-[40px] min-h-[40px] border rounded-full relative overflow-hidden"
        >
          {user?.user_metadata?.profile_cover ? (
            <Image
              fill
              alt="user profile"
              onLoadingComplete={(element) => element.classList.remove("opacity-0")}
              className="object-center object-cover opacity-0 transition duration-100"
              src={process.env.NEXT_PUBLIC_IMAGE_URL + user.user_metadata.profile_cover}
            />
          ) : (
            <UserIcon />
          )}
        </Link>
      )}
      <HamburgerMenu navItems={navItems} />
    </div>
  );
};

export default UserProfile;
