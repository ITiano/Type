import PageLayout from "components/layout/PageLayout";
import ProfileContainer from "containers/profile/ProfileContainer";

const Profile = () => {
  return (
    <PageLayout className="bg-white pb-20" footerClassName="hidden ">
      <ProfileContainer />
    </PageLayout>
  );
};

export default Profile;
