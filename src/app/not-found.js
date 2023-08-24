import Image from "next/image";
import routes from "@routes/routes";
import Link from "next/link";
import { ArrowRightIcon } from "@assets/icons/icons";

const NotFound = () => {
  return (
    <div className="min-h-screen centering flex-col gap-4 lg:flex-row lg:gap-16">
      <Image width={180} height={180} src="/images/public/404.png" alt="" />
      <div className="centering lg:justify-start lg:items-start flex-col gap-2">
        <p className="text-3xl lg:text-5xl font-bold">Page not found</p>
        <p className="text-gray-800 lg:text-lg my-1 lg:text-center">The page you are looking for it maybe deleted</p>
        <Link href={routes.home.path}>
          <div className="flex-start-center gap-2 text-lg font-semibold text-black">
            <p> Go to home</p>
            <ArrowRightIcon />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
