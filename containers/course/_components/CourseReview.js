import CustomBtn from "components/utils/CustomBtn";
import { CoursesImages } from "helper/Methods";

const CourseReview = ({ setStep }) => {
  return (
    <>
      <div className="bg-gray-3 bg-opacity-30 h-3 w-10/12 mt-14 rounded-full"></div>
      <div className="centering flex-col gap-2 w-96">
        {CoursesImages(140)[1]}
        <p className=" font-semibold pb-1.5 mt-1 text-2xl">Untitled Lesson 2</p>
        <p className="text-gray-3 text-xs">5min . 8 exercises</p>
        <div className="w-full centering gap-2 my-5">
          <span className="h-px bg-gray-3 bg-opacity-30 flex-1"></span>
          <span className="text-xs text-gray-3">Pro tip!</span>
          <span className="h-px bg-gray-3 bg-opacity-30 flex-1"></span>
        </div>
        <p className="text-gray-3 text-xs">this is a tip text this is a tip text this is a tip text this is a tip text </p>
        <p className="text-gray-3 text-xs">this is a tip text this is a tip text this is a tip text </p>
      </div>
      <div className="bg-white py-10 px-16 w-full flex-between-center">
        <CustomBtn text="previous lesson" arrowStartIcon />
        <CustomBtn className="black-btn" text="Get Started" onClick={() => setStep(2)} />
      </div>
    </>
  );
};

export default CourseReview;
