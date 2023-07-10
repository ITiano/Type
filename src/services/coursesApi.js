import serverSupabase from "./supabase-server";

export const getCourses = () => serverSupabase.from("courses").select();

export const getHistories = () => serverSupabase.from("histories").select();

export const getCourseById = (id) => serverSupabase.from("courses").select().eq("id", id)

export const getCourseByIndex = (indexes) => serverSupabase.from("courses").select("id, index").in("index", indexes)
