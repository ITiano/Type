import Image from "next/image";
import { useRouter } from "next/navigation";
import routes from "@routes/routes";
import CustomBtn from "@components/utils/CustomBtn";

const NotFound = () => {
  const router = useRouter();

  const navigateHandler = () => {
    router.push(routes.home.path);
    window.location.reload();
  };

  return (
    <>
      <Image width={200} height={200} src="/images/public/404.png" alt="" />
      <div>
        <p className="text-5xl font-bold">Error!</p>
        <p className="text-gray-3 text-base my-1">Somethings went wrang please try later</p>
        <CustomBtn text="Retry" className="px-0" arrowEndBtn onClick={navigateHandler} />
      </div>
    </>
  );
};

export default NotFound;
