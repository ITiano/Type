import Image from "next/image";
import { useRouter } from "next/router";
import routes from "routes/routes";

// Components
import CustomBtn from "components/utils/CustomBtn";
import PageLayout from "components/layout/PageLayout";

const NotFound = () => {
  const router = useRouter();

  const navigateHandler = () => {
    router.push(routes.home.path);
    window.location.reload();
  };

  return (
    <PageLayout className="flex-1 centering gap-12">
      <Image width={200} height={200} src="/images/public/404.png" alt="" />
      <div>
        <p className="text-5xl font-bold">Error!</p>
        <p className="text-gray-3 text-base my-1">Somethings went wrang please try later</p>
        <CustomBtn text="Retry" className="px-0" arrowEndBtn onClick={navigateHandler} />
      </div>
    </PageLayout>
  );
};

export default NotFound;
