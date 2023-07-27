import React from "react";
import routes from "@routes/routes";
import CourseDetail from "./CourseDetail";
import CourseHistory from "./CourseHistory";
import { HistoryIcon } from "@assets/icons/icons";
import { useAuth } from "src/context/AuthContextProvider";
import { toast } from "react-hot-toast";
import Link from "next/link";
import { CoursesIcons } from "@helper/utils";

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
  const [user] = useAuth();
  const props = { course, kind };

  return (
    <div
      className={`flex-between-center gap-2 p-2 rounded-xl shadow ${course.status === 3 ? "grayscale bg-gray-700" : "bg-white"} ${
        kind === 1 ? "w-full h-[86px] pl-0" : "flex-col w-full max-w-[300px] sm:max-w-full mx-auto h-[280px] pb-8 pt-3"
      }`}
    >
      <button
        className={`${kind === 2 ? (course.status === 1 ? "flex-end-center" : "invisible") : "hidden"} w-full`}
        onClick={() => course.status === 1 && setOpen(course)}
      >
        <HistoryIcon />
      </button>

      <CourseDetail {...props} />

      <CourseHistory {...props} history={course.bestHistory} />

      <div className={`${kind === 1 ? "flex-end-center" : "hidden"} gap-3`}>
        <button className={course.status === 1 ? "" : "invisible"} onClick={() => course.status === 1 && setOpen(course)}>
          <HistoryIcon />
        </button>

        {course.status === 3 ? (
          CoursesIcons[course.status]
        ) : (
          <Link
            href={!user ? routes.courses.path : routes.courseId.path(course.id)}
            replace
            onClick={(e) => {
              if (!user) {
                e.preventDefault();
                toast.error("You need to login first");
              }
            }}
          >
            {CoursesIcons[course.status]}
          </Link>
        )}
      </div>
    </div>
  );
};
