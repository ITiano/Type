import Image from "next/image";

import vlc from "public/images/public/vlc.png";
import PageLayout from "components/layout/PageLayout";

const NotFound = () => {
  return (
    <PageLayout>
      <section className="centering gap-8">
        <Image width={150} src={vlc} alt="" />
        <div>
          <p className="text-3xl font-bold">Error!</p>
          <p className="text-gray-3 text-base my-1">Somethings went wraong please try later</p>
        </div>
      </section>
    </PageLayout>
  );
};

export default NotFound;
