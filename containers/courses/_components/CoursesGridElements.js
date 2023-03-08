import Stars from "components/common/Stars";
import { CoursesIcons, CoursesImages } from "helper/Methods";
import CoursesElementsOptions from "./CoursesElementsOptions";

const CoursesGridElements = ({ item }) => {
  return (
    <div className={` p-2 rounded-xl w-60 centering flex-col ${item.status > 2 ? "grayscale bg-gray-2" : "bg-white "} `}>
      <div className="w-full flex-end-start -mb-5 h-9">{item.status < 2 && <CoursesElementsOptions />}</div>
      {CoursesImages(90)[item.id]}
      <p className=" font-semibold pb-1.5 mt-2">{item?.name}</p>
      <p className="text-gray-3 text-xs">5min . 8 exercises</p>
      <CoursesElements value={<Stars value={item.rating} />} />
      <CoursesElements title="Score" value={item.score} />
      <CoursesElements title="Speed" value={item.speed} />
      <CoursesElements title="Accuracy" value={item.accuracy} />
      <CoursesElements title="Duration" value={item.duration} />
      <div className="flex gap-5 my-5">
        {item.status < 2 && <Stars value={item.rating} />}
        {CoursesIcons[item.status]}
      </div>
    </div>
  );
};

export default CoursesGridElements;

const CoursesElements = ({ title, value }) => (
  <div className="hidden md:inline">
    {title && <p className="text-gray-3 text-xs pb-1.5">{title}</p>}
    {value && <p className="font-bold text-xs">{value}</p>}
  </div>
);
