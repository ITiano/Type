import Stars from "@components/common/Stars";
import { CoursesImages } from "@helper/Methods";
import React from "react";

const CourseRating = ({ data: { kind, name, score, accuracy, speed, duration } }) => {
  const elements = [
    { name: "Score", value: score },
    { name: "Accuracy", value: accuracy },
    { name: "Speed", value: speed },
    { name: "Time", value: duration },
  ];

  return (
    <>
      <div className="bg-gray-3 bg-opacity-30 h-3 w-10/12 mt-14 rounded-full"></div>
      <div className="centering flex-col gap-2 w-96">
        {CoursesImages(140)[kind]}
        <p className=" font-semibold pb-1.5 mt-1 text-2xl">{name}</p>
        <Stars value={4} />
        <div className="flex-between-center mt-5 divide-x">
          {elements.map((element) => (
            <CourseRatingElement key={element.name} {...element} />
          ))}
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
