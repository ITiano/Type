import clientSupabase from "./supabase-client";

export const verifyUser = (value) => clientSupabase.auth.signInWithOtp(value);

export const updateUser = (data) => clientSupabase.auth.updateUser({ data });

export const getUser = () => clientSupabase.auth.getUser();

export const uploadProfile = (value) =>
  clientSupabase.storage.from("user_profile").upload(value.name, value, {
    upsert: true,
  });

export const logoutUser = () => clientSupabase.auth.signOut();

