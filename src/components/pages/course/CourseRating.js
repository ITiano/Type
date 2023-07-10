import Stars from "@components/common/Stars";
import { CoursesImages } from "@helper/Methods";
import React from "react";

const CourseRating = ({ data: { kind, name }, value: { score, accuracy, speed }, time }) => {
  return (
    <>
      <div className="bg-gray-800 bg-opacity-30 h-3 w-10/12 mt-14 rounded-full"></div>
      <div className="centering flex-col gap-2 w-96">
        {CoursesImages(140)[kind]}
        <p className=" font-semibold pb-1.5 mt-1 text-2xl">{name}</p>
        <Stars value={score} />
        <div className="flex-between-center mt-5 divide-x">
          <CourseRatingElement name="Score" value={score} />
          <CourseRatingElement name="Accuracy" value={accuracy} />
          <CourseRatingElement name="Speed" value={speed} />
          <CourseRatingElement name="Time" value={time} />
        </div>
      </div>
    </>
  );
};

export default CourseRating;

const CourseRatingElement = ({ name, value }) => {
  return (
    <div className="text-center min-w-[120px]">
      <p>{name}</p>
      <p className="font-semibold mt-2">{value}</p>
    </div>
  );
};
