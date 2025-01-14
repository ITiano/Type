"use client";

import React, { useCallback, useEffect, useState } from "react";
import CustomInput from "src/common/CustomInput";
import { useAuth } from "src/context/AuthContextProvider";
import CustomBtn from "src/common/CustomBtn";
import { useRouter } from "next/navigation";
import CustomDropDown from "src/common/CustomDropDown";
import { dailyGoalList, weeklyGoalList } from "@helper/utils";
import { updateUser } from "@services/authApi";
import { toast } from "react-hot-toast";

const defaultValues = { firstName: "", lastName: "", email: "", daily: "", weekly: "" };

const ProfileForm = () => {
  const router = useRouter();
  const [user, setUser] = useAuth();
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState(defaultValues);

  const onSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      setLoading(true);
      const { data, error } = await updateUser(value);
      if (error) toast.error(error.message);
      else {
        setUser((prev) => ({ ...data.user, user_metadata: { ...prev.user_metadata, ...data.user.user_metadata } }));
        toast.success("Profile updated successfully");
      }
      setLoading(false);
    },
    [setUser, value]
  );

  useEffect(() => {
    setValue((prev) => ({ ...prev, email: user.email, ...user.user_metadata }));
  }, [router, user]);

  const disabled = !value.firstName || !value.lastName || !value.email || !value.daily || !value.weekly;

  return (
    <div>
      <p className="mb-5 font-semibold text-base">Edit profile</p>
      <form onSubmit={onSubmit} noValidate>
        <div className="flex flex-col md:flex-row md:divide-x-2 [&>*]:flex-1">
          <div className="md:pr-6">
            <p className="text-xs text-gray-800 mt-2 mb-3">Personal</p>
            <div className="md:flex gap-3 mb-3">
              <CustomInput value={value} setValue={setValue} name="firstName" label="First name" />
              <CustomInput value={value} setValue={setValue} name="lastName" label="Last name" />
            </div>
            <CustomInput value={value} setValue={setValue} name="email" type="email" label="Email" disabled />
          </div>
          <div className="md:pl-6">
            <p className="text-xs text-gray-800 mt-2 mb-3">Goal</p>
            <div className="flex flex-col gap-3">
              <CustomDropDown value={value} setValue={setValue} name="daily" label="Daily goal" list={dailyGoalList} />
              <CustomDropDown value={value} setValue={setValue} name="weekly" label="weakly goal" list={weeklyGoalList} />
            </div>
          </div>
        </div>
        <div className="flex-end-center mt-4">
          <CustomBtn type="submit" text="Save change" className="black-btn" disabled={disabled} loading={loading} />
        </div>
      </form>
    </div>
  );
};

export default ProfileForm;
