import React from "react";
import CustomInput from "components/utils/CustomInput";
import { useForm } from "react-hook-form";
import { useAuth } from "context/AuthContextProvider";

const defaultValues = { firstName: "", lastName: "", email: "" };

const ProfileForm = () => {
  const [user, setUser] = useAuth();

  const onSubmit = async (values) => {
    console.log(values);
  };

  const form = useForm({
    defaultValues,
    // resolver: yupResolver(loginValidation),
  });

  return (
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
        {/* <div className="flex-end-center gap-2">
          <CustomBtn text="Save change" className="black-btn" disabled={!form.isValid} />
          <CustomBtn text="Cancel" />
        </div> */}
      </form>
    </>
  );
};

export default ProfileForm;
