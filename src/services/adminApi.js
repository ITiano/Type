import clientSupabase from "./supabase-client";

export const getCoursesCount = () => clientSupabase.from("courses").select("", { count: "exact" });

export const addCourse = (data) => clientSupabase.from("courses").insert(data)

export const updateCourse = (data) => clientSupabase.from("courses").update(data).eq('id', data.id).select()