import CheckIcon from "public/icons/CheckIcon";
import LockIcon from "public/icons/LockIcon";
import PlayIcon from "public/icons/PlayIcon";

export const CoursesImages = (width = 70) => ({
  1: <img src={"/images/courses/Pencils.png"} width={width} alt="image" />,
  2: <img src={"/images/courses/Pin.png"} width={width} alt="image" />,
  3: <img src={"/images/courses/coffee.png"} width={width} alt="image" />,
  4: <img src={"/images/courses/Box.png"} width={width} alt="image" />,
});

export const CoursesIcons = {
  1: <CheckIcon />,
  2: <PlayIcon />,
  3: <LockIcon />,
};
