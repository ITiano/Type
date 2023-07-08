import ProfileContainer from "@components/pages/profile/ProfileContainer";
import routes from "@routes/routes";
import React from "react";

export const metadata = { title: routes.profile.title };

const Profile = () => {
  return <ProfileContainer />;
};

export default Profile;
