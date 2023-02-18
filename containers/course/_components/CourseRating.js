import CustomBtn from "components/utils/CustomBtn";
import Stars from "components/utils/Stars";
import { CoursesImages } from "helper/Methods";

const CourseRating = () => {
  return (
    <>
      <div className="bg-gray-3 bg-opacity-30 h-3 w-10/12 mt-14 rounded-full"></div>
      <div className="centering flex-col gap-2 w-96">
        {CoursesImages(140)[1]}
        <p className=" font-semibold pb-1.5 mt-1 text-2xl">Untitled Lesson 2</p>
        <Stars value={4} />
      </div>
      <div className="bg-white py-10 px-16 w-full flex-between-center">
        <CustomBtn text="previous lesson" arrowStartBtn onClick={() => setStep(2)} />
        <CustomBtn text="Next lesson" arrowEndBtn onClick={() => setStep(3)} />
      </div>
    </>
  );
};

export default CourseRating;
