import { useFormik } from "formik";

// Components
import Stars from "components/common/Stars";
import CustomBtn from "components/utils/CustomBtn";
import CustomInput from "components/utils/CustomInput";

// Icons
import ShareIcon from "public/icons/ShareIcon";
import UserIcon from "public/icons/UserIcon";
import AssignImgIcon from "public/icons/AssignImgIcon";

const ProfileContainer = () => {
  return (
    <section className="bg-gray-1 rounded-3xl mx-auto py-6 px-4 my-8 2xs:p-10 md:p-12">
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
      <p className="mt-10 mb-5 font-semibold text-base">Edit profile</p>
      {/* Form */}
      <ProfileForm />
    </section>
  );
};

export default ProfileContainer;

const ProfileForm = () => {
  const initialValues = {};

  const onSubmit = async (values) => {
    console.log(values);
  };

  const formik = useFormik({
    onSubmit,
    initialValues,
    enableReinitialize: true,
  });

  return (
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
  );
};
