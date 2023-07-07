import React from "react";

// Components
import Stars from "@components/common/Stars";

// Icons
import AssignImgIcon from "public/icons/AssignImgIcon";
import ShareIcon from "public/icons/ShareIcon";
import UserIcon from "public/icons/UserIcon";

const ProfileHeader = () => {
  return (
    <div className="flex-between-center">
      <div className="flex-start-center gap-4 2xs:gap-5">
        <div className="relative">
          <UserIcon className="w-16 2xs:w-20 md:w-28" />
          <AssignImgIcon className="absolute bottom-0 right-0 cursor-pointer w-7 h-7" />
        </div>
        <div>
          <p className="text-base font-semibold mb-0.5 pl-1">Fateme</p>
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
