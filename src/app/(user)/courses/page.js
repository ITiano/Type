import CoursesContainer from "@components/pages/courses/CoursesContainer";
import { getCourses, getHistories } from "@services/coursesApi";
import routes from "@routes/routes";

export const metadata = { title: routes.courses.title };

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

const Courses = async () => {
  const result = await Promise.all([getCourses(), getHistories()]);
  const [{ data: courses, error: coursesError }, { data: allHistories, error: historiesError }] = result;

  if (coursesError || historiesError) throw new Error("Error");

  let defaultStatus = 2;

  const data = courses.reduce((prev, current) => {
    const histories = allHistories.filter((history) => history.course_id === current.id);
    const bestHistory =
      histories.length >= 1 ? histories.reduce((prev, current) => (current?.duration > prev?.duration ? prev : current)) : null;
    const status = bestHistory ? 1 : defaultStatus;
    !bestHistory && (defaultStatus = 3);
    return [...prev, { ...current, bestHistory, histories, status }];
  }, []);

  return <CoursesContainer data={data} />;
};

export default Courses;
