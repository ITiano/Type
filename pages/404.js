import Image from "next/image";

import vlc from "public/images/public/vlc.png";
import PageLayout from "components/layout/PageLayout";
import CustomBtn from "components/utils/CustomBtn";
import ArrowRight from "public/icons/ArrowRight";
import { useRouter } from "next/router";

const NotFound = () => {
  const router = useRouter();

  const navigateHandler = () => {
    router.push("/");
    window.location.reload();
  };

  return (
    <PageLayout className="bg-white">
      <section className="centering gap-12">
        <Image width={200} src={vlc} alt="" />
        <div>
          <p className="text-5xl font-bold">Error!</p>
          <p className="text-gray-3 text-base my-1">Somethings went wrang please try later</p>
          <CustomBtn text="Retry" className="px-0" endIcon={<ArrowRight />} onClick={navigateHandler} />
        </div>
      </section>
    </PageLayout>
  );
};

export default NotFound;
