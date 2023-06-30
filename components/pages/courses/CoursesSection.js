import React from "react";
import Link from "next/link";
import routes from "routes/routes";

// Icons
import { CoursesIcons } from "helper/Methods";

// Components
import CourseDetail from "./CourseDetail";
import CourseHistory from "./CourseHistory";
import CourseOptions from "./CourseOptions";

const CoursesSection = ({ kind, courses, setOpen }) => {
  return (
    <section
      className={`${
        kind === 1 ? "centering flex-col gap-5" : "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3"
      } `}
    >
      {courses.map((course) => (
        <CourseElement key={course?.id} course={course} kind={kind} setOpen={setOpen} />
      ))}
    </section>
  );
};

export default CoursesSection;

const CourseElement = ({ course, kind, setOpen }) => {
  const props = { course, kind, setOpen };

  return (
    <div
      className={`flex-between-center p-2 rounded-xl shadow ${course.status === 3 ? "grayscale bg-gray-2" : "bg-white"} ${
        kind === 1 ? "w-full" : "flex-col w-full max-w-[300px] sm:max-w-full mx-auto h-[280px] pb-8 pt-3"
      }`}
    >
      {/* Options btn in kind 2 */}
      <div className={`${kind === 2 ? "flex-end-center" : "hidden"} w-full `}>
        <CourseOptions {...props} />
      </div>

      <CourseDetail {...props} />

      <CourseHistory {...props} />

      {/* Options btn in kind 1*/}
      <div className={`${kind === 1 ? "flex-end-center" : "hidden"} gap-1`}>
        {course.status === 3 ? (
          CoursesIcons[course.status]
        ) : (
          <Link href={routes.courseId.path(course.id)}>{CoursesIcons[course.status]}</Link>
        )}
        <CourseOptions {...props} />
      </div>
    </div>
  );
};
