"use client";

import React, { useEffect } from "react";
import ProfileHeader from "./ProfileHeader";
import ProfileForm from "./ProfileForm";
import Spinner from "@components/utils/Spinner";
import { useRouter } from "next/navigation";
import routes from "@routes/routes";
import { useAuth } from "src/context/AuthContextProvider";

const ProfileContainer = () => {
  const [user] = useAuth();
  const router = useRouter();

  useEffect(() => {
    user === null && router.push(routes.home.path);
  }, [router, user]);

  return (
    <section className="bg-gray-1 rounded-3xl mx-auto py-6 px-4 2xs:p-10 md:p-12 mb-8 mt-24">
      {!user ? (
        <div className="centering">
          <Spinner />
        </div>
      ) : (
        <>
          <ProfileHeader />
          <ProfileForm />
        </>
      )}
    </section>
  );
};

export default ProfileContainer;
