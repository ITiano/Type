import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Stars from "@components/common/Stars";
import { AssignImgIcon, LogOutIcon, ShareIcon, UserIcon } from "@assets/icons/icons";
import { useAuth } from "src/context/AuthContextProvider";
import { toast } from "react-hot-toast";
import { logoutUser, updateUser, uploadProfile } from "@services/authApi";
import Image from "next/image";
import { averageGenerator } from "@helper/utils";
import { useRouter } from "next/navigation";
import routes from "@routes/routes";
import Spinner from "@components/utils/Spinner";

const ProfileHeader = ({ data }) => {
  const { push } = useRouter();
  const inputRef = useRef();
  const [user, setUser] = useAuth();
  const [value, setValue] = useState(null);
  const [loading, setLoading] = useState(false);

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

  const logoutHandler = useCallback(async () => {
    setLoading(true);
    const { error } = await logoutUser();
    if (error) toast.error("Sth went wrong please try again later");
    else {
      push(routes.home.path);
      setUser(null);
    }
    setLoading(false);
  }, [push, setUser]);

  useEffect(() => {
    const updateProfile = () => {
      const promise = new Promise(async (resolve, reject) => {
        const { data: uploadData, error: uploadError } = await uploadProfile(value);
        if (uploadError) reject();
        else {
          const { data, error } = await updateUser({ ...user.metadata, profile_cover: "user_profile/" + uploadData.path });
          if (error) reject();
          else {
            setUser((prev) => ({ ...data.user, user_metadata: { ...prev.user_metadata, ...data.user.user_metadata } }));
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
    <div className="flex items-start justify-start flex-col md:flex-row md:!justify-between md:!items-center gap-2 mb-8">
      <div className="flex-start-center gap-4 2xs:gap-5">
        <div className="relative cursor-pointer" onClick={() => inputRef.current.click()}>
          <div className="relative rounded-full overflow-hidden w-16 2xs:w-20 md:w-28 h-16 2xs:h-20 md:h-28">
            {user?.user_metadata?.profile_cover ? (
              <Image
                width={50}
                height={50}
                quality={100}
                alt={user.user_metadata.profile_cover}
                onLoadingComplete={(element) => element.classList.remove("opacity-0")}
                src={process.env.NEXT_PUBLIC_IMAGE_URL + user.user_metadata.profile_cover}
                className="w-full h-full object-center object-cover opacity-0 transition duration-300"
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

      <div className="flex-end-center gap-3 w-full md:w-auto">
        <button className="bg-white rounded-full w-8 h-8 centering" onClick={logoutHandler}>
          {loading ? <Spinner /> : <LogOutIcon />}
        </button>
        <span className="bg-white rounded-full w-8 h-8 centering cursor-pointer">
          <ShareIcon />
        </span>
      </div>
    </div>
  );
};

export default ProfileHeader;
