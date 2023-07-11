import React, { useEffect, useMemo, useRef, useState } from "react";
import Stars from "@components/common/Stars";
import { AssignImgIcon, LogOutIcon, ShareIcon, UserIcon } from "@assets/icons/icons";
import { useAuth } from "src/context/AuthContextProvider";
import { toast } from "react-hot-toast";
import { updateUser, uploadProfile } from "@services/authApi";
import Image from "next/image";
import { averageGenerator } from "@helper/utils";

const ProfileHeader = ({ data }) => {
  const inputRef = useRef();
  const [user, setUser] = useAuth();
  const [value, setValue] = useState(null);

  const { email, lastName, firstName } = useMemo(() => {
    const email = user?.email;
    const firstName = user?.user_metadata?.firstName;
    const lastName = user?.user_metadata?.lastName;
    return { email, firstName, lastName };
  }, [user?.email, user?.user_metadata?.firstName, user?.user_metadata?.lastName]);

  const { lastWeek = {}, thisWeek = {} } = data || {};

  const score = useMemo(() => {
    const value = lastWeek.accuracy + thisWeek.accuracy;
    const length = lastWeek.length + thisWeek.length;
    const accuracy = averageGenerator(value, length);
    return Math.ceil(accuracy / 20);
  }, [lastWeek, thisWeek]);

  useEffect(() => {
    const updateProfile = () => {
      const promise = new Promise(async (resolve, reject) => {
        const { data: uploadData, error: uploadError } = await uploadProfile(value);
        if (uploadError) reject();
        else {
          const { data, error } = await updateUser({ ...user.metadata, profile_cover: "user_profile/" + uploadData.path });
          if (error) reject();
          else {
            setUser(data.user);
            resolve();
          }
        }
        setValue(null);
      });
      toast.promise(promise, {
        loading: "pending",
        error: "Sth went wrong please try again later",
        success: "Profile photo updated successfully",
      });
    };
    value && updateProfile();
  }, [setUser, user.metadata, value]);

  return (
    <div className="flex-between-center mb-8">
      <div className="flex-start-center gap-4 2xs:gap-5">
        <div className="relative cursor-pointer" onClick={() => inputRef.current.click()}>
          <div className="relative rounded-full overflow-hidden w-16 2xs:w-20 md:w-28 h-16 2xs:h-20 md:h-28">
            {user?.user_metadata?.profile_cover ? (
              <Image
                height={50}
                width={50}
                quality={100}
                alt={user.user_metadata.profile_cover}
                onLoadingComplete={(element) => element.classList.remove("opacity-0")}
                src={process.env.NEXT_PUBLIC_IMAGE_URL + user.user_metadata.profile_cover}
                className="w-full h-full object-center object-cover opacity-0 transition duration-500"
              />
            ) : (
              <UserIcon className="h-full w-full" />
            )}
          </div>
          <input type="file" className="hidden" ref={inputRef} onChange={(e) => setValue(e.target.files[0])} />
          <span>
            <AssignImgIcon className="absolute bottom-0 right-0 cursor-pointer w-7 h-7" />
          </span>
        </div>
        <div>
          <p className="text-base font-semibold mb-0.5 pl-1">{firstName || lastName ? `${firstName} - ${lastName}` : email}</p>
          <div className="flex-start-center">
            <Stars value={score} />
          </div>
        </div>
      </div>

      <div className="flex-end-center gap-3">
        <span className="bg-white rounded-full w-8 h-8 centering cursor-pointer">
          <LogOutIcon />
        </span>
        <span className="bg-white rounded-full w-8 h-8 centering cursor-pointer">
          <ShareIcon />
        </span>
      </div>
    </div>
  );
};

export default ProfileHeader;
