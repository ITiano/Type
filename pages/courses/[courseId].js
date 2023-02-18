import { NextSeo } from "next-seo";
import DATA from "db";
import CourseContainer from "containers/course/Course";

const STRING_TEST = "In publishing and graphic design. In publishing and graphic design. In publishing and graphic.";

const CourseInfo = ({ data }) => {
  return (
    <>
      <NextSeo {...data.SEO} />
      <CourseContainer data={data} />
    </>
  );
};

export default CourseInfo;

export const getServerSideProps = async ({ req, query }) => {
  return {
    props: {
      data: DATA.find((item) => +item?.id === +query?.courseId),
    },
  };
};
