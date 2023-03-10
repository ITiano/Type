import React from "react";
import Link from "next/link";

// Icons
import { CoursesIcons } from "helper/Methods";

// Components
import Stars from "components/common/Stars";

const CourseHistory = ({ course, kind }) => {
  return (
    <div className={`${kind === 1 ? "hidden md:flex-start-center gap-8" : "centering flex-col gap-3"}`}>
      <div className="centering gap-4 ">
        {course.status === 1 && <ElementBox title="Starts" value={course.rating} kind={kind} star />}
        {kind === 2 && (
          <>
            {course.status === 3 ? (
              CoursesIcons[course.status]
            ) : (
              <Link href={`/courses/${course.id}`}>{CoursesIcons[course.status]}</Link>
            )}
          </>
        )}
      </div>
      {course.status === 1 && (
        <div className={`${kind === 1 ? "hidden md:flex-start-center gap-8" : "grid grid-cols-4 gap-3 flex-1"}`}>
          <ElementBox title="Score" value={course.score} kind={kind} />
          <ElementBox title="Speed" value={course.speed} kind={kind} />
          <ElementBox title="Accuracy" value={course.accuracy} kind={kind} />
          <ElementBox title="Duration" value={course.duration} kind={kind} />
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
