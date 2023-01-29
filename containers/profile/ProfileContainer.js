import CustomBtn from "components/utils/CustomBtn";
import CustomInput from "components/utils/CustomInput";
import { useFormik } from "formik";
import AssignImgIcon from "public/icons/AssignImgIcon";
import ShareIcon from "public/icons/ShareIcon";
import StarIcon from "public/icons/StarIcon";
import UserIcon from "public/icons/UserIcon";

const initialValues = {};

const ProfileContainer = () => {
  const onSubmit = async (values) => {
    console.log(values);
  };

  const formik = useFormik({
    onSubmit,
    initialValues,
    // validationSchema: validation,
    enableReinitialize: true,
  });
  const rating = [true, true, true, false, false];

  return (
    <div className="max-w-page">
      <section className="bg-gray-1 rounded-3xl max-w-4xl mx-auto p-10 mt-5">
        <div className="flex-between-center">
          <div className="flex-start-center gap-5">
            <div className="relative">
              <UserIcon className="w-28" />
              <AssignImgIcon className="absolute bottom-0 right-0 cursor-pointer" />
            </div>
            <div>
              <p className="text-base font-semibold mb-0.5 pl-1">Fateme</p>
              <div className="flex-start-center">
                {rating.map((s) => (
                  <StarIcon key={s} className={!s && "!text-gray-3"} />
                ))}
              </div>
            </div>
          </div>
          <div className="bg-white rounded-full w-8 h-8 centering cursor-pointer">
            <ShareIcon />
          </div>
        </div>
        <p className="mt-10 mb-5 font-semibold text-base">Edit profile</p>
        <div className="flex-between-start">
          <div className="pr-6 w-full border-r border-gray-3 border-opacity-50">
            <p className="text-xs text-gray-3 mt-2 mb-3">Personal</p>
            <div className="flex-start-center gap-3">
              <CustomInput formik={formik} label="Firstname" />
              <CustomInput formik={formik} label="Lastname" />
            </div>
            <CustomInput formik={formik} label="Email" />
            <CustomInput formik={formik} label="Password" Password />
            <CustomInput formik={formik} label="Confrim password" Password />
          </div>
          <div className="pl-6 w-full">
            <p className="text-xs text-gray-3 mt-2 mb-3">Goal</p>
            <CustomInput formik={formik} label="Daily goal" />
            <CustomInput formik={formik} label="weakly goal" />
            <CustomInput formik={formik} label="first day of week" />
          </div>
        </div>
        <div className="flex-end-center gap-2">
          <CustomBtn text="Save change" className="black-btn" />
          <CustomBtn text="Cancel" />
        </div>
      </section>
    </div>
  );
};

export default ProfileContainer;
