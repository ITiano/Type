"use client";

import React, { useEffect, useState } from "react";
import CustomInput from "@components/utils/CustomInput";
import { useAuth } from "src/context/AuthContextProvider";
import CustomBtn from "@components/utils/CustomBtn";
import { useRouter } from "next/navigation";
import CustomDropDown from "@components/utils/CustomDropDown";

const defaultValues = { firstName: "", lastName: "", email: "", daily: "", weekly: "", monthly: "" };

const dailyList = [
  { value: 40, label: "40 min" },
  { value: 30, label: "30 min" },
  { value: 20, label: "20 min" },
];

const weeklyList = [
  { value: 40, label: "40 min" },
  { value: 30, label: "30 min" },
  { value: 20, label: "20 min" },
];

const monthlyList = [
  { value: 40, label: "40 min" },
  { value: 30, label: "30 min" },
  { value: 20, label: "20 min" },
];

const ProfileForm = () => {
  const router = useRouter();
  const [user, setUser] = useAuth();
  const [value, setValue] = useState(defaultValues);

  const onSubmit = (e) => {
    e.preventDefault();

    
  };

  useEffect(() => {
    setValue((prev) => ({ ...prev, email: user.email, ...user.user_metadata }));
  }, [router, user]);

  const disabled = !value.firstName || !value.lastName || !value.email || !value.daily || !value.weekly || !value.monthly;

  return (
    <>
      <p className="mt-10 mb-5 font-semibold text-base">Edit profile</p>
      <form onSubmit={onSubmit}>
        <div className="flex flex-col md:flex-row md:divide-x-2 [&>*]:flex-1">
          <div className="md:pr-6">
            <p className="text-xs text-gray-3 mt-2 mb-3">Personal</p>
            <div className="md:flex gap-3 mb-3">
              <CustomInput value={value} setValue={setValue} name="firstName" label="First name" />
              <CustomInput value={value} setValue={setValue} name="lastName" label="Last name" />
            </div>
            <CustomInput value={value} setValue={setValue} name="email" label="Email" disabled />
          </div>
          <div className="md:pl-6">
            <p className="text-xs text-gray-3 mt-2 mb-3">Goal</p>
            <div className="flex flex-col gap-3">
              <CustomDropDown value={value} setValue={setValue} name="daily" label="Daily goal" list={dailyList} />
              <CustomDropDown value={value} setValue={setValue} name="weekly" label="weakly goal" list={weeklyList} />
              <CustomDropDown value={value} setValue={setValue} name="monthly" label="first day of week" list={monthlyList} />
            </div>
          </div>
        </div>
        <div className="flex-end-center mt-4">
          <CustomBtn text="Save change" className="black-btn" disabled={disabled} />
        </div>
      </form>
    </>
  );
};

export default ProfileForm;
