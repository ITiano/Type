import supabaseClient from "./supabase-client";

export const verifyUser = (value) => supabaseClient.auth.signInWithOtp(value);

export const updateUser = (data) => supabaseClient.auth.updateUser({ data })

export const getUser = () => supabaseClient.auth.getUser();
