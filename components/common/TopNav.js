import Link from "next/link";
import { useRouter } from "next/router";
import ArrowDownIcon from "public/icons/ArrowDownIcon";
import UserIcon from "public/icons/UserIcon";

const TopNav = ({ className = "" }) => {
  return (
    <header className={`"px-2 py-4 bg-transparent z-30 w-full" ${className}`}>
      <nav className="max-w-6xl mx-auto flex-between-center">
        <h2 className="text-dark font-bold text-center text-base">Typiano</h2>
        <nav className="flex-between-center gap-5">
          <DesktopNavElements title="Home" path="/" />
          <DesktopNavElements title="Guide" path="/guide" />
          <DesktopNavElements title="Courses" path="/courses" />
          <DesktopNavElements title="About us" path="/about_us" />
          <DesktopNavElements title="Contact us" path="/contact_us" />
          <span className=""></span>
        </nav>
        <div className="flex-end-center gap-1">
          <ArrowDownIcon />
          <UserIcon className="w-10" />
        </div>
      </nav>
    </header>
  );
};

export default TopNav;

const DesktopNavElements = ({ title, path }) => {
  const { pathname } = useRouter();

  return (
    <Link
      href={path}
      className={`px-3 py-1.5 font-semibold rounded-full ${pathname === path ? "text-dark bg-mainBlue" : "text-gray-4 "}`}
    >
      {title}
    </Link>
  );
};
