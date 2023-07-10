import React from "react";
import Link from "next/link";
import routes from "@routes/routes";
import Stars from "@components/common/Stars";
import { CoursesIcons } from "@helper/Methods";

const CourseHistory = ({ course, history, kind }) => {
  const { status, id } = course;
  const { score, speed, accuracy, duration } = history || {};

  const elementsData = [
    { title: "Speed", value: speed || "-" },
    { title: "Accuracy", value: accuracy || "-" },
    { title: "Duration", value: duration || "-" },
  ];

  return (
    <div className={`${kind === 1 ? "flex-start-center gap-8" : "centering flex-col gap-3"}`}>
      <div className="centering gap-4">
        <ElementBox title="Score" value={score || 0} kind={kind} status={status} star />
        {kind === 2 &&
          (status === 3 ? CoursesIcons[status] : <Link href={routes.courseId.path(id)}>{CoursesIcons[status]}</Link>)}
      </div>

      <div className={`flex-1 ${kind === 1 ? "flex-start-center gap-8" : "centering gap-6"}`}>
        {elementsData.map((element) => (
          <ElementBox key={element.title} {...element} status={status} kind={kind} />
        ))}
      </div>
    </div>
  );
};

export default CourseHistory;

const ElementBox = ({ title, value, star, kind, status }) => (
  <div
    className={`${kind === 1 ? "hidden md:flex-start-start flex-col" : "centering flex-col"} ${
      status === 1 ? "" : "text-gray-800"
    } gap-2`}
  >
    {!star && <p className="text-gray-800 text-xs">{title}</p>}
    {star ? <Stars value={value} /> : <p className="font-bold text-xs">{value}</p>}
  </div>
);
