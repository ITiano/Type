import React from "react";
import { cookies } from "next/headers";
import CourseContainer from "src/app/courses/components/CourseContainer";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

export const dynamic = "force-dynamic";

export const generateMetadata = async ({ params: { id } }) => {
  const cookieStore = cookies();
  const supabase = createServerComponentClient({ cookies: () => cookieStore });

  const { data } = await supabase.from("courses").select().eq("id", id);
  const [course] = data || [];
  return { title: course?.seo_title, description: course?.seo_description };
};

const CourseInfo = async ({ params }) => {
  const cookieStore = cookies();
  const supabase = createServerComponentClient({ cookies: () => cookieStore });

  const { data: response, error: courseError } = await supabase.from("courses").select().eq("id", params.id);
  const [courseData] = response || [];
  let prev = null;
  let next = null;
  if (courseError) throw new Error(courseError.message);
  if (courseData) {
    const currentLesson = +courseData.name.replace("Lesson ", "");
    const prevLessonName = `Lesson ${currentLesson - 1}`;
    const nextLessonName = `Lesson ${currentLesson + 1}`;

    const { data: prevAndNextData, error: prevAndNextError } = await supabase
      .from("courses")
      .select("id, name")
      .in("name", [prevLessonName, nextLessonName]);
    if (prevAndNextError) throw new Error(prevAndNextError.message);
    if (prevAndNextData) {
      prev = prevAndNextData.find((course) => course.name === prevLessonName);
      next = prevAndNextData.find((course) => course.name === nextLessonName);
    }
  }
  const data = { ...courseData, prev, next };

  return <CourseContainer data={data} />;
};

export default CourseInfo;
