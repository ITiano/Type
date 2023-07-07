import supabase from "./supabase";

export const verifyUser = (value) => supabase.auth.signInWithOtp(value)
