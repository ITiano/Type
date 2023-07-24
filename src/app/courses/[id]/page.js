import React from "react";
import CourseContainer from "@components/pages/course/CourseContainer";
import { getCourseById, getCourseByName } from "@services/coursesApi";

export const dynamic = "force-dynamic";

export const generateMetadata = async ({ params: { id } }) => {
  const { data } = await getCourseById(id);
  const [course] = data || [];
  return { title: course?.seo_title, description: course?.seo_description };
};

const CourseInfo = async ({ params }) => {
  const { data: response, error: courseError } = await getCourseById(params.id);
  const [courseData] = response || [];
  let prev = null;
  let next = null;
  if (courseError) throw new Error("Error");
  if (courseData) {
    const currentLesson = +courseData.name.replace("Lesson ", "");
    const prevLessonName = `Lesson ${currentLesson - 1}`;
    const nextLessonName = `Lesson ${currentLesson + 1}`;
    const { data: prevAndNextData, error: prevAndNextError } = await getCourseByName([prevLessonName, nextLessonName]);
    if (prevAndNextError) throw new Error("Error");
    if (prevAndNextData) {
      prev = prevAndNextData.find((course) => course.name === prevLessonName);
      next = prevAndNextData.find((course) => course.name === nextLessonName);
    }
  }
  const data = { ...courseData, prev, next };

  return <CourseContainer data={data} />;
};

export default CourseInfo;
