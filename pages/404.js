import Image from "next/image";
import notFoundImage from "public/images/public/404.png";
import CustomBtn from "components/utils/CustomBtn";
import { useRouter } from "next/router";
import useViewport from "hooks/useViewport";
import PageLayout from "components/layout/PageLayout";

const NotFound = () => {
  const router = useRouter();
  const { height } = useViewport("px");

  const navigateHandler = () => {
    router.push("/");
    window.location.reload();
  };

  return (
    <PageLayout className="flex-1 centering gap-12">
      <Image width={200} src={notFoundImage} alt="" />
      <div>
        <p className="text-5xl font-bold">Error!</p>
        <p className="text-gray-3 text-base my-1">Somethings went wrang please try later</p>
        <CustomBtn text="Retry" className="px-0" arrowEndBtn onClick={navigateHandler} />
      </div>
    </PageLayout>
  );
};

export default NotFound;
