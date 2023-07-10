import { CheckIcon, LockIcon, PlayIcon } from "@assets/icons/icons";
import PencelSvg from "@assets/vectors/PencelSvg";
import Image from "next/image";

export const CoursesImages = (size = 70) => ({
  1: <PencelSvg style={{ width: size, height: size }} />,
  2: <Image src="/images/courses/Pin.png" width={size} height={size} alt="image" />,
  3: <Image src="/images/courses/coffee.png" width={size} height={size} alt="image" />,
  4: <Image src="/images/courses/Box.png" width={size} height={size} alt="image" />,
});

export const CoursesIcons = {
  1: <CheckIcon />,
  2: <PlayIcon />,
  3: <LockIcon />,
};
