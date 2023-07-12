import serverSupabase from "./supabase-server";

export const getCourses = () => serverSupabase.from("courses").select().order("created_at", { ascending: true });

export const getHistories = () => serverSupabase.from("histories").select();

export const getCourseById = (id) => serverSupabase.from("courses").select().eq("id", id);

export const getCourseByName = (names) =>
  serverSupabase.from("courses").select("id, name").in("name", names)

// const { count } = await clientSupabase.from("courses").select("", { count: "exact" });
