import React from "react";
import CourseContainer from "@components/pages/course/CourseContainer";
import { getCourseById, getCourseByIndex } from "@services/coursesApi";

export const dynamic = "force-dynamic";

export const generateMetadata = async ({ params: { id } }) => {
  const { data: [course] } = await getCourseById(id);
  return { title: course.seo_title, description: course.seo_description };
};

const CourseInfo = async ({ params }) => {
  const {
    data: [courseData],
    error: courseError,
  } = await getCourseById(params.id);
  const { data: prevAndNextData, error: prevAndNextError } = await getCourseByIndex([courseData.index - 1, courseData.index + 1]);
  const prev = prevAndNextData.find((course) => courseData.index - 1 === course.index);
  const next = prevAndNextData.find((course) => courseData.index + 1 === course.index);
  const data = { ...courseData, prev, next };

  return <CourseContainer data={data} />;
};

export default CourseInfo;
