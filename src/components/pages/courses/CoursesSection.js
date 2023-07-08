import React from "react";
import Link from "next/link";
import routes from "@routes/routes";

// Icons
import { CoursesIcons } from "@helper/Methods";

// Components
import CourseDetail from "./CourseDetail";
import CourseHistory from "./CourseHistory";
import { HistoryIcon } from "@assets/icons/icons";

const CoursesSection = ({ kind, data, setOpen }) => {
  return (
    <section
      className={`${
        kind === 1 ? "centering flex-col gap-5" : "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3"
      } `}
    >
      {data.map((course) => (
        <CourseElement key={course?.id} course={course} kind={kind} setOpen={setOpen} />
      ))}
    </section>
  );
};

export default CoursesSection;

const CourseElement = ({ course, kind, setOpen }) => {
  const props = { course, kind };

  return (
    <div
      className={`flex-between-center p-2 rounded-xl shadow ${course.status === 3 ? "grayscale bg-gray-2" : "bg-white"} ${
        kind === 1 ? "w-full" : "flex-col w-full max-w-[300px] sm:max-w-full mx-auto h-[280px] pb-8 pt-3"
      }`}
    >
      {course.status === 1 && (
        <button className={`${kind === 2 ? "flex-end-center" : "hidden"} w-full`} onClick={() => setOpen(course)}>
          <HistoryIcon />
        </button>
      )}

      <CourseDetail {...props} />

      {course.bestHistory && <CourseHistory {...props} history={course.bestHistory} />}

      <div className={`${kind === 1 ? "flex-end-center" : "hidden"} gap-2`}>
        {course.status === 3 ? (
          CoursesIcons[course.status]
        ) : (
          <Link href={routes.courseId.path(course.id)}>{CoursesIcons[course.status]}</Link>
        )}
        {course.status === 1 && (
          <button onClick={() => setOpen(course)}>
            <HistoryIcon />
          </button>
        )}
      </div>
    </div>
  );
};
