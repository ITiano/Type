import Type from "components/common/Type";
import PageLayout from "components/layout/PageLayout";
import DATA from "db";
import { NextSeo } from "next-seo";

const STRING_TEST = "In publishing and graphic design. In publishing and graphic design. In publishing and graphic.";

const CurseInfo = ({ data }) => {
  return (
    <PageLayout>
      <NextSeo {...data.SEO} />
      <div className="min-h-screen w-full flex items-center justify-center px-16 test">
        <Type data={data?.course} />
      </div>
    </PageLayout>
  );
};

export default CurseInfo;

export const getServerSideProps = async ({ req, query }) => {
  return {
    props: {
      data: DATA.find((item) => +item?.id === +query?.courseId),
    },
  };
};
