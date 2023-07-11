import clientSupabase from "./supabase-client";

export const addHistory = async (data) => clientSupabase.from("histories").insert(data);
