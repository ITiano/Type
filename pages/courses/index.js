import PageLayout from "components/layout/PageLayout";
import CoursesContainer from "containers/courses/courses";

const CursesPage = () => {
  return (
    <PageLayout className="!justify-start" footerClassName="hidden">
      <CoursesContainer />
    </PageLayout>
  );
};

export default CursesPage;
