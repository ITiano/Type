import React from "react";
import Link from "next/link";
import routes from "@routes/routes";

// Icons
import { CoursesIcons } from "@helper/Methods";

// Components
import Stars from "@components/common/Stars";

const CourseHistory = ({ course: { id, status, rating, score, speed, accuracy, duration }, kind }) => {
  const elementsData = [
    { title: "Score", value: score },
    { title: "Speed", value: speed },
    { title: "Accuracy", value: accuracy },
    { title: "Duration", value: duration },
  ];

  return (
    <div className={`${kind === 1 ? "hidden md:flex-start-center gap-8" : "centering flex-col gap-3"}`}>
      <div className="centering gap-4 ">
        {status === 1 && <ElementBox title="Starts" value={rating} kind={kind} star />}
        {kind === 2 &&
          (status === 3 ? CoursesIcons[status] : <Link href={routes.courseId.path(id)}>{CoursesIcons[status]}</Link>)}
      </div>
      {status === 1 && (
        <div className={kind === 1 ? "hidden md:flex-start-center gap-8" : "grid grid-cols-4 gap-3 flex-1"}>
          {elementsData.map((element) => (
            <ElementBox key={element.title} {...element} kind={kind} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CourseHistory;

const ElementBox = ({ title, value, star, kind }) => (
  <div className={`${kind === 1 ? "hidden md:flex-start-start flex-col" : "centering flex-col"} gap-2`}>
    {!star && <p className="text-gray-3 text-xs">{title}</p>}
    {star ? <Stars value={value} /> : <p className="font-bold text-xs">{value}</p>}
  </div>
);
