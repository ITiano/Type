"use client";

import React from "react";
import ProfileHeader from "./ProfileHeader";
import ProfileForm from "./ProfileForm";
import Spinner from "@components/utils/Spinner";
import { useAuth } from "src/context/AuthContextProvider";
import ProfileActivity from "@components/pages/profile/ProfileActivity";

const ProfileContainer = () => {
  const [user] = useAuth();

  return (
    <section className="bg-gray-600 rounded-3xl mx-auto py-6 px-4 2xs:p-10 md:p-12 mb-8 mt-24">
      {!user ? (
        <div className="centering">
          <Spinner />
        </div>
      ) : (
        <>
          <ProfileHeader />
          <ProfileActivity />
          <ProfileForm />
        </>
      )}
    </section>
  );
};

export default ProfileContainer;
