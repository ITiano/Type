import Stars from "@components/common/Stars";
import Confetti from "@components/common/Confetti";
import { CoursesImages } from "@helper/Methods";
import { addHistory } from "@services/courseApi";
import React, { useEffect } from "react";
import { useAuth } from "src/context/AuthContextProvider";

const CourseRating = ({ data: { kind, name, id }, value, time }) => {
  const [user] = useAuth();

  useEffect(() => {
    addHistory({ ...value, duration: time, course_id: id, user_id: user.id });
  }, [id, time, user.id, value]);

  return (
    <>
      <div className="centering flex-col gap-2 max-w-xs mx-auto flex-1">
        {CoursesImages(140)[kind]}
        <p className=" font-semibold pb-1.5 mt-1 text-2xl">{name}</p>
        <Stars value={value.score} />
        <div className="flex-between-center mt-5 divide-x">
          <CourseRatingElement name="Score" value={value.score} />
          <CourseRatingElement name="Accuracy" value={value.accuracy} />
          <CourseRatingElement name="Speed" value={value.speed} />
          <CourseRatingElement name="Time" value={time} />
        </div>
      </div>
      <Confetti />
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
