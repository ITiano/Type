import React from "react";
import Link from "next/link";
import routes from "@routes/routes";
import Stars from "@components/common/Stars";
import { CoursesIcons, SecondTimeTranslator } from "@helper/utils";

const CourseHistory = ({ course, history, kind }) => {
  const { status, id } = course;
  const { score, speed, accuracy, duration } = history || {};

  const elementsData = [
    { title: "Speed", value: speed || "-", suffix: speed && "WPM" },
    { title: "Accuracy", value: accuracy || "-", suffix: accuracy && "%" },
    { title: "Duration", value: duration ? SecondTimeTranslator(duration) : "-" },
  ];

  return (
    <div className={`${kind === 1 ? "flex-start-center gap-8" : "centering flex-col gap-3"} flex-1 md:flex-none`}>
      <div className={`centering gap-4 ${kind === 1 ? "hidden 3xs:flex" : ""}`}>
        <ElementBox title="Score" value={score || 0} kind={kind} status={status} star />
        {kind === 2 &&
          (status === 3 ? CoursesIcons[status] : <Link href={routes.courseId.path(id)}>{CoursesIcons[status]}</Link>)}
      </div>

      <div className={`flex-1 ${kind === 1 ? "flex-start-center gap-2 md:gap-8" : "centering gap-6"}`}>
        {elementsData.map((element) => (
          <ElementBox key={element.title} {...element} status={status} kind={kind} />
        ))}
      </div>
    </div>
  );
};

export default CourseHistory;

const ElementBox = ({ title, value, suffix, star, kind, status }) => (
  <div
    className={`${kind === 1 ? "md:centering" : "centering"} flex-1 flex-col ${
      status === 1 ? "" : "text-gray-800"
    } gap-2`}
  >
    {!star && <p className={`text-gray-800 text-xs w-full text-center ${kind === 1 ? "hidden 2xs:block" : ""}`}>{title}</p>}
    {star ? <Stars value={value} /> : <p className="font-bold text-xs text-center w-full">{`${value} ${suffix || ""}`}</p>}
  </div>
);
