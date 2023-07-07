import serverSupabase from "./supabase-server";

export const getCourses = () => serverSupabase.from("courses").select();
export const getHistories = () => serverSupabase.from("histories").select();
