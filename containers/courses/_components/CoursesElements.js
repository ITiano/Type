import CheckIcon from "public/icons/CheckIcon";
import LockIcon from "public/icons/LockIcon";
import PlayIcon from "public/icons/PlayIcon";

const CoursesElements = ({ item, index }) => {
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
  return (
    <div className={`flex-between-center bg-white w-full px-4 rounded-xl ${item.status > 2 ? "grayscale bg-gray-light" : ""} `}>
      <div className="flex-start-center gap-3">
        {images[item.id]}
        <div>
          <p className=" font-semibold">{item?.name}</p>
          <p className="text-gray-dark text-[.65rem]">5min . 8 exercises</p>
        </div>
      </div>
      {icons[item.status]}
    </div>
  );
};
export default CoursesElements;
