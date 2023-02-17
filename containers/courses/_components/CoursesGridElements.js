import { CoursesIcons, CoursesImages } from "helper/Methods";
import StarIcon from "public/icons/StarIcon";
import CoursesElementsOptions from "./CoursesElementsOptions";

const CoursesGridElements = ({ item }) => {
  return (
    <div className={` p-2 rounded-xl w-60 centering flex-col ${item.status > 2 ? "grayscale bg-gray-2" : "bg-white "} `}>
      <div className="w-full flex-end-start -mb-5 h-9">{item.status < 2 && <CoursesElementsOptions />}</div>
      {CoursesImages(90)[item.id]}
      <p className=" font-semibold pb-1.5 mt-2">{item?.name}</p>
      <p className="text-gray-3 text-xs">5min . 8 exercises</p>
      <div className="flex gap-5 my-5">
        {item.status < 2 && (
          <div className="flex-start-center">
            {[1, 2, 3, 4, 5].map((s) => (
              <StarIcon className={s > item.rating && "!text-gray-3"} />
            ))}
          </div>
        )}
        {CoursesIcons[item.status]}
      </div>
    </div>
  );
};

export default CoursesGridElements;
