import Link from "next/link";
import { useRouter } from "next/router";
import ArrowDownIcon from "public/icons/ArrowDownIcon";
import UserIcon from "public/icons/UserIcon";

const TopNav = () => {
  const { pathname } = useRouter();
  const DesktopNavElements = ({ title, path }) => (
    <Link href={path} className={`px-3 py-1.5 font-semibold rounded-full ${pathname === path ? "text-dark bg-mainBlue" : "text-gray-4 "}`}>
      {title}
    </Link>
  );
  return (
    <header className="flex-between-center max-w-6xl mx-auto px-2 mt-5 ">
      <h1>Typiano</h1>
      <nav className="flex-between-center gap-5">
        <DesktopNavElements title="Home" path="/" />
        <DesktopNavElements title="Guide" path="/guide" />
        <DesktopNavElements title="Courses" path="/courses" />
        <DesktopNavElements title="About us" path="/about_us" />
        <DesktopNavElements title="Contact us" path="/contact_us" />
        <span className=" "></span>
      </nav>
      <div className="flex-end-center gap-1">
        <ArrowDownIcon />
        <UserIcon />
      </div>
    </header>
  );
};

export default TopNav;
