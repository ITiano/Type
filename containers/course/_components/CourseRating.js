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
        <div className="flex-between-center mt-5 gap-10">
          <div className="text-center">
            <p>Accuracy</p>
            <p className="font-semibold mt-2">58</p>
          </div>
          <div className=" w-px h-5 bg-gray-3 bg-opacity-30"></div>
          <div className="text-center">
            <p>Accuracy</p>
            <p className="font-semibold mt-2">58</p>
          </div>
          <div className=" w-px h-5 bg-gray-3 bg-opacity-30"></div>
          <div className="text-center">
            <p>Speed</p>
            <p className="font-semibold mt-2">25</p>
          </div>
          <div className=" w-px h-5 bg-gray-3 bg-opacity-30"></div>
          <div className="text-center">
            <p>Time</p>
            <p className="font-semibold mt-2">02:48</p>
          </div>
        </div>
      </div>
      <div className="bg-white py-10 px-16 w-full flex-between-center">
        <CustomBtn text="previous lesson" arrowStartBtn onClick={() => setStep(2)} />
        <CustomBtn text="Next lesson" arrowEndBtn onClick={() => setStep(3)} />
      </div>
    </>
  );
};

export default CourseRating;
