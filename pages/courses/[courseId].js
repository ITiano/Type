import { NextSeo } from "next-seo";
import DATA from "db";
import CourseContainer from "components/pages/course/CourseContainer";

const CourseInfo = ({ data = [] }) => {
  return (
    <>
      <NextSeo {...data.SEO} />
      <CourseContainer data={data} />
    </>
  );
};

export default CourseInfo;

export const getServerSideProps = async ({ query }) => {
  return {
    props: {
      data: DATA.find((item) => +item?.id === +query?.courseId) || [],
    },
  };
};
