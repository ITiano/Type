import React from "react";

// Components
import PageLayout from "components/layout/PageLayout";
import ProfileForm from "components/profile/ProfileForm";
import ProfileHeader from "components/profile/ProfileHeader";

const Profile = () => {
  return (
    <PageLayout>
      <section className="bg-gray-1 rounded-3xl mx-auto py-6 px-4 my-8 2xs:p-10 md:p-12">
        <ProfileHeader />
        <ProfileForm />
      </section>
    </PageLayout>
  );
};

export default Profile;
