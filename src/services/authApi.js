import supabase from "./supabase";

export const verifyUser = (value) => supabase.auth.signInWithOtp(value);

export const updateUser = (data) => supabase.auth.updateUser({ data });
