import { cookies } from "next/headers";
import AdminContainer from "src/app/(admin)/components/AdminContainer";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

export const metadata = { title: "admin" };

const Admin = async () => {
  const cookieStore = cookies();
  const supabase = createServerComponentClient({ cookies: () => cookieStore });

  const { data } = await supabase.from("courses").select().order("created_at", { ascending: true });

  return <AdminContainer data={data} />;
};

export default Admin;
