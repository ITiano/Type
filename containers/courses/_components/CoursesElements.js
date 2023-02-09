import { useState } from "react";
import LockIcon from "public/icons/LockIcon";
import PlayIcon from "public/icons/PlayIcon";
import StarIcon from "public/icons/StarIcon";
import CheckIcon from "public/icons/CheckIcon";
import MoreCircleIcon from "public/icons/MoreCircleIcon";
import CoursesElementsOptions from "./CoursesElementsOptions";

const CoursesElements = ({ item, index }) => {
  const [OpenMenu, setOpenMenu] = useState(false);
  //   const ConvertImage = () => {
  //     if (index % 3 === 0) return;
  //     if (index % 2 === 0) return;
  //     if (index % 1 === 0) return;
  //     if (index % 0 === 0) return;
  //   };
  const images = {
    1: <img src={"/images/courses/Pencils.png"} width={70} alt="image" />,
    2: <img src={"/images/courses/Pin.png"} width={70} alt="image" />,
    3: <img src={"/images/courses/coffee.png"} width={70} alt="image" />,
    4: <img src={"/images/courses/Box.png"} width={70} alt="image" />,
  };
  const icons = {
    1: <CheckIcon />,
    2: <PlayIcon />,
    3: <LockIcon />,
  };

  const CoursesElementsOption = ({ title, value }) => (
    <div>
      <p className="text-gray-3 text-xs pb-1.5">{title}</p>
      {title === "Starts" ? (
        <div className="flex-start-center">
          {[1, 2, 3, 4, 5].map((s) => (
            <StarIcon className={s > value && "!text-gray-3"} />
          ))}
        </div>
      ) : (
        <div className="font-bold text-xs">{value}</div>
      )}
    </div>
  );

  const handleBlur = (e) => {
    if (!e.currentTarget.contains(e.relatedTarget)) setOpenMenu(false);
  };

  return (
    <div className={`flex-between-center bg-white w-full px-4 rounded-xl ${item.status > 2 ? "grayscale bg-gray-2" : ""} `}>
      <div className="flex-start-center gap-3">
        {images[item.id]}
        <div className="flex-start-center gap-20">
          <div>
            <p className=" font-semibold pb-1.5">{item?.name}</p>
            <p className="text-gray-3 text-[.65rem]">5min . 8 exercises</p>
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
        </div>
      </div>
      <div className="flex-end-center gap-1">
        {icons[item.status]}
        <button onClick={() => setOpenMenu(true)} onBlur={handleBlur} className="cursor-pointer relative">
          <MoreCircleIcon />
         <CoursesElementsOptions open={OpenMenu} />
        </button>
      </div>
    </div>
  );
};
export default CoursesElements;
