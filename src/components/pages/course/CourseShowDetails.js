import { CheckIcon, CloseIcon, WarningIcon } from "@assets/icons/icons";
import React from "react";

const CourseShowDetails = ({ value, className, disableStatus, duration }) => {
  const { score, accuracy, speed } = value.current;

  let status;
  if (score === 0) status = { label: "Please start", icon: <CheckIcon />, className: "text-gray-400" };
  if (score === 1) status = { label: "Oopps ! Try again", icon: <CloseIcon />, className: "text-red-400" };
  if (score === 2 || score === 3) status = { label: "Good ! try harder", icon: <WarningIcon />, className: "text-orange-400" };
  if (score === 4 || score === 5) status = { label: "Great ! continue", icon: <CheckIcon />, className: "text-green-400" };

  let minutes = Math.floor(duration / 60);
  if (minutes < 10) minutes = `0${minutes}`;
  let second = Math.floor(duration % 60);
  if (second < 10) second = `0${second}`;

  return (
    <div className={`w-full ${className}`}>
      <CourseRatingElement name="Score" value={score} />
      <CourseRatingElement name="Accuracy" value={accuracy} />
      {!disableStatus && (
        <div className={`centering flex-col flex-1 gap-2 px-4 ${status.className}`}>
          <p className="[&>*]:w-7 [&>*]:h-7">{status.icon}</p>
          <p className="font-semibold text-xl whitespace-nowrap">{status.label}</p>
        </div>
      )}
      <CourseRatingElement name="Speed" value={speed} />
      <CourseRatingElement name="Time" value={`${minutes}:${second}`} />
    </div>
  );
};

export default CourseShowDetails;

const CourseRatingElement = ({ name, value }) => {
  return (
    <div className="text-center min-w-[120px] flex-1 px-4">
      <p>{name}</p>
      <p className="font-semibold mt-2">{value}</p>
    </div>
  );
};
