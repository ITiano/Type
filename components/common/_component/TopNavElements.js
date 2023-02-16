import Link from "next/link";
import { useRouter } from "next/router";

const TopNavElements = ({ title, path }) => {
  const { pathname } = useRouter();
  return (
    <Link href={path} className={`px-3 py-1.5 font-semibold rounded-full ${pathname === path ? "text-dark bg-mainBlue" : "text-gray-4 "}`}>
      {title}
    </Link>
  );
};

export default TopNavElements;
