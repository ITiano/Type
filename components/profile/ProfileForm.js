import React from "react";

// formik
import { useFormik } from "formik";

// Components
import CustomInput from "components/utils/CustomInput";
import CustomBtn from "components/utils/CustomBtn";

const initialValues = {};

const ProfileForm = () => {
  const onSubmit = async (values) => {
    console.log(values);
  };

  const formik = useFormik({
    onSubmit,
    initialValues,
    enableReinitialize: true,
  });

  return (
    <>
      <p className="mt-10 mb-5 font-semibold text-base">Edit profile</p>
      <form onSubmit={formik.handleSubmit}>
        <div className="flex flex-col md:flex-row md:divide-x-2 [&>*]:flex-1">
          <div className="md:pr-6">
            <p className="text-xs text-gray-3 mt-2 mb-3">Personal</p>
            <div className="md:flex gap-3">
              <CustomInput formik={formik} label="First name" />
              <CustomInput formik={formik} label="Last name" />
            </div>
            <CustomInput formik={formik} label="Email" />
            <CustomInput formik={formik} label="Password" Password />
            <CustomInput formik={formik} label="Confirm password" Password />
          </div>
          <div className="md:pl-6">
            <p className="text-xs text-gray-3 mt-2 mb-3">Goal</p>
            <CustomInput formik={formik} label="Daily goal" />
            <CustomInput formik={formik} label="weakly goal" />
            <CustomInput formik={formik} label="first day of week" />
          </div>
        </div>
        <div className="flex-end-center gap-2">
          <CustomBtn text="Save change" className="black-btn" disabled={!formik.isValid} />
          <CustomBtn text="Cancel" />
        </div>
      </form>
    </>
  );
};

export default ProfileForm;
