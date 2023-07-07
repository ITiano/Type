import ProfileForm from "@components/pages/profile/ProfileForm";
import ProfileHeader from "@components/pages/profile/ProfileHeader";
import React from "react";

const Profile = () => {
  return (
    <section className="bg-gray-1 rounded-3xl mx-auto py-6 px-4 my-8 2xs:p-10 md:p-12">
      <ProfileHeader />
      <ProfileForm />
    </section>
  );
};

export default Profile;
