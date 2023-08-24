"use client";
import Image from "next/image";
import CustomBtn from "src/common/CustomBtn";

const Error = ({ reset }) => {
  return (
    <div className="min-h-screen centering flex-col gap-4 lg:flex-row lg:gap-16">
      <Image width={180} height={180} src="/images/public/404.png" alt="" />
      <div className="centering lg:justify-start lg:items-start flex-col gap-2">
        <p className="text-3xl lg:text-5xl font-bold">Error!</p>
        <p className="text-gray-800 lg:text-lg my-1 lg:text-center">Somethings went wrang please try again later</p>
        <CustomBtn text="Retry" className="!px-0" arrowEndBtn onClick={() => reset()} />
      </div>
    </div>
  );
};

export default Error;
