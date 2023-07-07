import CoursesContainer from "@components/pages/course/test/CoursesContainer";
import { getCourses, getHistories } from "@services/coursesApi";

const Courses = async () => {
  const { data: courses, error: coursesError } = await getCourses();
  const { data: allHistories, error: historiesError } = await getHistories();

  let isPassed = false;

  const data = courses.reduce((prev, current) => {
    const histories = allHistories.filter((history) => history.course_id === current.id);
    const isLocked = histories.length ? false : isPassed;
    !histories.length && (isPassed = true);
    return [...prev, { ...current, histories, isLocked }];
  }, []);

  return <CoursesContainer data={data} />;
};

export default Courses;
