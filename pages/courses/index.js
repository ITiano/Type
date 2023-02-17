import PageLayout from "components/layout/PageLayout";
import CoursesContainer from "containers/courses/courses";

const CursesPage = () => {
  return (
    <PageLayout footerClassName="hidden">
      <CoursesContainer />
    </PageLayout>
  );
};

export default CursesPage;
