import StarIcon from "public/icons/StarIcon";
import { CoursesIcons, CoursesImages } from "helper/Methods";
import CoursesElementsOptions from "./CoursesElementsOptions";
import Stars from "components/common/Stars";

const CoursesRowElements = ({ item }) => {
  return (
    <div className={`flex-between-center w-full p-2 rounded-xl ${item.status > 2 ? "grayscale bg-gray-2" : "bg-white "} `}>
      <div className="flex-start-center gap-3">
        {CoursesImages()[item.id]}
        <div>
          <p className=" font-semibold pb-1.5">{item?.name}</p>
          <p className="text-gray-3 text-[.65rem]">5min . 8 exercises</p>
        </div>
      </div>
      {item.status < 2 && (
        <div className="flex-start-center gap-8">
          <CoursesElementsOption title="Starts" value={item.rating} />
          <CoursesElementsOption title="Score" value={item.score} />
          <CoursesElementsOption title="Speed" value={item.speed} />
          <CoursesElementsOption title="Accuracy" value={item.accuracy} />
          <CoursesElementsOption title="Duration" value={item.duration} />
        </div>
      )}
      <div className="flex-end-center gap-1">
        {CoursesIcons[item.status]}
        <CoursesElementsOptions />
      </div>
    </div>
  );
};
export default CoursesRowElements;

const CoursesElementsOption = ({ title, value }) => (
  <div className="hidden md:inline">
    <p className="text-gray-3 text-xs pb-1.5">{title}</p>
    {title === "Starts" ? <Stars value={value} /> : <div className="font-bold text-xs">{value}</div>}
  </div>
);
