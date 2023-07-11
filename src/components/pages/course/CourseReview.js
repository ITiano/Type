import CoursesImages from "@components/common/CoursesImages";
import React from "react";

const CourseReview = ({ data }) => {
  return (
    <div className="centering flex-col gap-2">
      <CoursesImages kind={data.kind} size={120} />
      <p className=" font-semibold pb-1.5 mt-1 text-2xl">{data.name}</p>
      <p className="text-gray-800 text-xs">5min . 8 exercises</p>
      <div className="w-full centering gap-2 my-5">
        <span className="h-px bg-gray-800 bg-opacity-30 flex-1"></span>
        <span className="text-xs text-gray-800">Pro tip!</span>
        <span className="h-px bg-gray-800 bg-opacity-30 flex-1"></span>
      </div>
      <p className="text-gray-800 text-xs">this is a tip text this is a tip text this is a tip text this is a tip text </p>
      <p className="text-gray-800 text-xs">this is a tip text this is a tip text this is a tip text </p>
    </div>
  );
};

export default CourseReview;
