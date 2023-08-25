import routes from "@routes/routes";
import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import CoursesContainer from "src/app/(user)/courses/components/CoursesContainer";

export const metadata = { title: routes.courses.title };

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

const Courses = async () => {
  const cookieStore = cookies();
  const supabase = createServerComponentClient({ cookies: () => cookieStore });

  const getHistories = supabase.from("histories").select();
  const getCourses = supabase.from("courses").select().order("created_at", { ascending: true });

  const result = await Promise.all([getCourses, getHistories]);
  const [{ data: courses, error: coursesError }, { data: allHistories, error: historiesError }] = result;

  if (coursesError || historiesError) throw new Error(coursesError.message || historiesError.message);

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
