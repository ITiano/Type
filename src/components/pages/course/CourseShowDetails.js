import { CheckIcon, CloseIcon, WarningIcon } from "@assets/icons/icons";
import { SecondTimeTranslator } from "@helper/utils";
import React from "react";

const CourseShowDetails = ({ value, className, disableStatus }) => {
  const { score, accuracy, speed, duration } = value;

  let status;
  if (score === 0) status = { label: "Please start", icon: <CheckIcon />, className: "text-gray-400" };
  if (score === 1) status = { label: "Oopps ! Try again", icon: <CloseIcon />, className: "text-red-400" };
  if (score === 2 || score === 3) status = { label: "Good ! try harder", icon: <WarningIcon />, className: "text-orange-400" };
  if (score === 4 || score === 5) status = { label: "Great ! continue", icon: <CheckIcon />, className: "text-green-400" };

  return (
    <div className={`w-full ${className}`}>
      <CourseRatingElement label="Score" value={score} />
      <CourseRatingElement label="Accuracy" value={accuracy} suffix="%" />
      {!disableStatus && (
        <div className={`hidden md:centering flex-col flex-1 gap-2 px-4 ${status.className}`}>
          <p className="[&>*]:w-7 [&>*]:h-7">{status.icon}</p>
          <p className="font-semibold text-xl whitespace-nowrap">{status.label}</p>
        </div>
      )}
      <CourseRatingElement label="Speed" value={speed} suffix="WPM" />
      <CourseRatingElement label="Time" value={SecondTimeTranslator(duration)} />
    </div>
  );
};

export default CourseShowDetails;

const CourseRatingElement = ({ label, value, suffix }) => {
  return (
    <div className="text-center min-w-[120px] flex-1 px-4">
      <p>{label}</p>
      <p className="font-semibold mt-2">{`${value} ${suffix || ""}`}</p>
    </div>
  );
};
