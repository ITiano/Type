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
      <div className="flex gap-5 my-5">
        {item.status < 2 && <Stars value={item.rating} />}
        {CoursesIcons[item.status]}
      </div>
    </div>
  );
};

export default CoursesGridElements;
