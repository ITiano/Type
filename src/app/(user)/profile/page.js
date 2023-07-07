import ProfileForm from "@components/pages/profile/ProfileForm";
import ProfileHeader from "@components/pages/profile/ProfileHeader";
import routes from "@routes/routes";
import React from "react";

export const metadata = { title: routes.profile.title };

const Profile = () => {
  return (
    <section className="bg-gray-1 rounded-3xl mx-auto py-6 px-4 2xs:p-10 md:p-12 mb-8 mt-24">
      <ProfileHeader />
      <ProfileForm />
    </section>
  );
};

export default Profile;
