import AdminContainer from "@components/pages/admin/AdminContainer";
import { getCourses } from "@services/coursesApi";

export const metadata = { title: "admin" };

const Admin = async () => {
  const { data } = await getCourses();

  return <AdminContainer data={data} />;
};

export default Admin;
