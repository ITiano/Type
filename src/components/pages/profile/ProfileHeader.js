import React, { useCallback, useMemo, useRef, useState } from "react";
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
import useDisplayUser from "@hooks/useDisplayUser";

const ProfileHeader = ({ data, onShare, shareLoading }) => {
  const { push } = useRouter();
  const inputRef = useRef();
  const userName = useDisplayUser();
  const [user, setUser] = useAuth();
  const [loading, setLoading] = useState(false);

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
    if (error) toast.error(error.message);
    else {
      push(routes.home.path);
      setUser(null);
    }
    setLoading(false);
  }, [push, setUser]);

  const updatedProfile = useCallback(
    ({ target }) => {
      const file = target.files[0];
      if (!file.type.includes("image")) toast.error("This format is not acceptable");
      else if (file.size > 2000000) toast.error("Uploaded image must be at most 2MB");
      else {
        const promise = new Promise(async (resolve, reject) => {
          const { data: uploadData, error: uploadError } = await uploadProfile(file);
          if (uploadError) reject();
          else {
            const { data, error } = await updateUser({ ...user.metadata, profile_cover: "user_profile/" + uploadData.path });
            if (error) reject();
            else {
              setUser((prev) => ({ ...data.user, user_metadata: { ...prev.user_metadata, ...data.user.user_metadata } }));
              resolve();
            }
          }
        });
        toast.promise(promise, {
          loading: "pending",
          error: "Sth went wrong please try again later",
          success: "Profile photo updated successfully",
        });
      }
    },
    [setUser, user.metadata]
  );

  return (
    <div className="flex items-start justify-start flex-col md:flex-row md:!justify-between md:!items-center gap-2 mb-8">
      <div className="flex-start-center gap-4 2xs:gap-5">
        <div className="relative cursor-pointer" onClick={() => inputRef.current.click()}>
          <div className="relative rounded-full border border-primary-900 overflow-hidden w-16 2xs:w-20 md:w-28 h-16 2xs:h-20 md:h-28">
            {user?.user_metadata?.profile_cover ? (
              <Image
                width={50}
                unoptimized
                height={50}
                quality={100}
                alt={user.user_metadata.profile_cover}
                onLoadingComplete={(element) => element.classList.remove("opacity-0")}
                src={process.env.NEXT_PUBLIC_IMAGE_URL + user.user_metadata.profile_cover}
                className="w-full h-full object-center object-cover opacity-0 transition duration-100"
              />
            ) : (
              <UserIcon className="h-full w-full" />
            )}
          </div>
          <input type="file" className="hidden" accept="image/*" ref={inputRef} onChange={updatedProfile} />
          <span>
            <AssignImgIcon className="absolute bottom-0 right-0 cursor-pointer w-7 h-7" />
          </span>
        </div>
        <div>
          <p className="text-base font-semibold mb-0.5 pl-1">{userName}</p>
          <div className="flex-start-center">
            <Stars value={score} />
          </div>
        </div>
      </div>

      <div className="flex-end-center gap-3 w-full md:w-auto">
        <button className="bg-white rounded-full w-8 h-8 centering" onClick={logoutHandler}>
          {loading ? <Spinner /> : <LogOutIcon />}
        </button>
        <span onClick={!shareLoading ? onShare : undefined} className="bg-white rounded-full w-8 h-8 centering cursor-pointer">
          {shareLoading ? <Spinner /> : <ShareIcon />}
        </span>
      </div>
    </div>
  );
};

export default ProfileHeader;
