import { CheckIcon, LockIcon, PlayIcon } from "@assets/icons/icons";
import Image from "next/image";

export const CoursesImages = (width = 70) => ({
  1: <Image src="/images/courses/Pencils.png" width={width} height={width} alt="image" />,
  2: <Image src="/images/courses/Pin.png" width={width} height={width} alt="image" />,
  3: <Image src="/images/courses/coffee.png" width={width} height={width} alt="image" />,
  4: <Image src="/images/courses/Box.png" width={width} height={width} alt="image" />,
});

export const CoursesIcons = {
  1: <CheckIcon />,
  2: <PlayIcon />,
  3: <LockIcon />,
};
