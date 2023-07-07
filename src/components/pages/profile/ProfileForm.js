"use client";

import React, { useEffect } from "react";
import CustomInput from "@components/utils/CustomInput";
import { useForm } from "react-hook-form";
import { useAuth } from "src/context/AuthContextProvider";
import { yupResolver } from "@hookform/resolvers/yup";
import { profileValidation } from "@helper/validation";
import CustomBtn from "@components/utils/CustomBtn";
import Spinner from "@components/utils/Spinner";
import routes from "@routes/routes";
import { useRouter } from "next/navigation";

const defaultValues = { firstName: "", lastName: "", email: "" };

const ProfileForm = () => {
  const router = useRouter();
  const [user, setUser] = useAuth();

  const onSubmit = (values) => {
    console.log(values);
  };

  const form = useForm({
    defaultValues,
    resolver: yupResolver(profileValidation),
  });

  useEffect(() => {
    if (user) {
      const { name, lastName } = user.user_metadata;
      form.setValue("firstName", name || "");
      form.setValue("email", user.email);
      form.setValue("lastName", lastName || "");
    } else if (user === null) router.push(routes.home.path);
  }, [form, router, user]);

  return user ? (
    <>
      <p className="mt-10 mb-5 font-semibold text-base">Edit profile</p>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex flex-col md:flex-row md:divide-x-2 [&>*]:flex-1">
          <div className="md:pr-6">
            <p className="text-xs text-gray-3 mt-2 mb-3">Personal</p>
            <div className="md:flex gap-3">
              <CustomInput form={form} name="firstName" label="First name" />
              <CustomInput form={form} name="lastName" label="Last name" />
            </div>
            <CustomInput form={form} name="email" label="Email" />
            {/* <CustomInput form={form} label="Password" Password />
            <CustomInput form={form} label="Confirm password" Password /> */}
          </div>
          <div className="md:pl-6">
            <p className="text-xs text-gray-3 mt-2 mb-3">Goal</p>
            {/* <CustomInput form={form} label="Daily goal" />
            <CustomInput form={form} label="weakly goal" />
            <CustomInput form={form} label="first day of week" /> */}
          </div>
        </div>
        <div className="flex-end-center gap-2">
          <CustomBtn text="Save change" className="black-btn" disabled={!form.isValid} />
        </div>
      </form>
    </>
  ) : (
    <Spinner />
  );
};

export default ProfileForm;
