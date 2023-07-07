"use client";

import Image from "next/image";
import routes from "@routes/routes";
import CustomBtn from "@components/utils/CustomBtn";
import { useRouter } from "next/navigation";

const NotFound = () => {
  const router = useRouter();

  return (
    <div className="min-h-[100svh] centering flex-col ">
      <Image width={200} height={200} src="/images/public/404.png" alt="" />
      <div>
        <p className="text-5xl font-bold">Error!</p>
        <p className="text-gray-3 text-base my-1">Somethings went wrang please try later</p>
        <CustomBtn text="Home page" className="!px-0" arrowEndBtn onClick={() => router.push(routes.home.path)} />
      </div>
    </div>
  );
};

export default NotFound;
