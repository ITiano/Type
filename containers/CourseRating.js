import CustomBtn from "@components/utils/CustomBtn";
import Stars from "@components/common/Stars";
import { CoursesImages } from "@helper/Methods";

const CourseRating = ({ data }) => {
  return (
    <div className="centering flex-col gap-2 w-96">
      {CoursesImages(140)[data.kind]}
      <p className=" font-semibold pb-1.5 mt-1 text-2xl">{data.name}</p>
      <Stars value={4} />
      <div className="flex-between-center mt-5 gap-10">
        <div className="text-center">
          <p>Score</p>
          <p className="font-semibold mt-2">{data.score}</p>
        </div>
        <div className=" w-px h-5 bg-gray-3 bg-opacity-30"></div>
        <div className="text-center">
          <p>Accuracy</p>
          <p className="font-semibold mt-2">{data.accuracy}</p>
        </div>
        <div className=" w-px h-5 bg-gray-3 bg-opacity-30"></div>
        <div className="text-center">
          <p>Speed</p>
          <p className="font-semibold mt-2">{data.speed}</p>
        </div>
        <div className=" w-px h-5 bg-gray-3 bg-opacity-30"></div>
        <div className="text-center">
          <p>Time</p>
          <p className="font-semibold mt-2">{data.duration}</p>
        </div>
      </div>
    </div>
  );
};

export default CourseRating;
