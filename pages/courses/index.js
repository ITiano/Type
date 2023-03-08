import PageLayout from "components/layout/PageLayout";
import CoursesContainer from "containers/courses/courses";
import DATA from "db";

const CursesPage = ({ data }) => {
  return (
    <PageLayout>
      <CoursesContainer data={data} />;
    </PageLayout>
  );
};

export default CursesPage;

export const getServerSideProps = async () => {
  return {
    props: {
      data: DATA,
    },
  };
};
