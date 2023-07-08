import React, { useMemo } from "react";
import Stars from "@components/common/Stars";
import { AssignImgIcon, ShareIcon, UserIcon } from "@assets/icons/icons";
import { useAuth } from "src/context/AuthContextProvider";

const ProfileHeader = () => {
  const [user] = useAuth();

  const { email, lastName, firstName } = useMemo(() => {
    const email = user?.email;
    const firstName = user?.user_metadata?.firstName;
    const lastName = user?.user_metadata?.lastName;
    return { email, firstName, lastName };
  }, [user?.email, user?.user_metadata?.firstName, user?.user_metadata?.lastName]);

  return (
    <div className="flex-between-center">
      <div className="flex-start-center gap-4 2xs:gap-5">
        <div className="relative">
          <UserIcon className="w-16 2xs:w-20 md:w-28" />
          <AssignImgIcon className="absolute bottom-0 right-0 cursor-pointer w-7 h-7" />
        </div>
        <div>
          <p className="text-base font-semibold mb-0.5 pl-1">
            {firstName || data.lastName ? `${firstName} - ${lastName}` : email}
          </p>
          <div className="flex-start-center">
            <Stars value={3} />
          </div>
        </div>
      </div>
      <div className="bg-white rounded-full w-8 h-8 centering cursor-pointer">
        
        <ShareIcon />
      </div>
    </div>
  );
};

export default ProfileHeader;
