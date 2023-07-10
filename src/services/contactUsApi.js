import clientSupabase from "./supabase-client";

export const addContactUs = (value) => clientSupabase.from("contact_us").insert(value);
