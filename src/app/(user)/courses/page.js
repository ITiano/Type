import CoursesContainer from "@components/pages/course/test/CoursesContainer";
import routes from "@routes/routes";
import { getCourses, getHistories } from "@services/coursesApi";

export const metadata = { title: routes.courses.title };

export const dynamic = "force-dynamic";

const Courses = async () => {
  const { data: courses, error: coursesError } = await getCourses();
  const { data: allHistories, error: historiesError } = await getHistories();

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
