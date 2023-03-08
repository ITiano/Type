import ActivityModal from "components/common/_component/ActivityModal";
import HamburgerMenu from "components/common/_component/HamburgerMenu";
import TopNavElements from "components/common/_component/TopNavElements";
import PageLayout from "layout/PageLayout";
import Link from "next/link";
import { useRouter } from "next/router";
import ArrowDownIcon from "public/icons/ArrowDownIcon";
import UserIcon from "public/icons/UserIcon";
import React, { useState } from "react";
import routes from "routes/routes";

const navElements = [routes.home, routes.guide, routes.courses, routes.aboutUs, routes.contactUs];

const Header = () => {
  const { pathname } = useRouter();
  const [OpenModal, setOpenModal] = useState(false);

  const handleBlur = (e) => {
    if (!e.currentTarget.contains(e.relatedTarget)) setOpenModal(false);
  };

  return (
    <PageLayout TagName="header" className="!bg-transparent fixed top-0 left-1/2 -translate-x-1/2">
      <div className="flex-between-center p-4">
        <h2 className="text-dark font-bold text-center text-base">Typiano</h2>
        <nav className="flex gap-3">
          {navElements.map((navElement) => (
            <Link
              key={navElement.path}
              href={navElement.path}
              className={`px-3 py-1.5 font-semibold rounded-full ${
                pathname === navElement.path ? "text-dark bg-mainBlue" : "text-gray-4 "
              }`}
            >
              {navElement.title}
            </Link>
          ))}
        </nav>
        <div>user</div>
      </div>
    </PageLayout>
  );
};

export default Header;

const teest = (
  <></>
  // <nav className="max-w-6xl mx-auto flex-between-center px-4">
  //   <h2 >Typiano</h2>
  //   <nav className="hidden md:flex-between-center gap-5 ">
  //     {navElements.map((navElement) => (
  //       <TopNavElements key={navElement.path} title={navElement.title} path={navElement.path} />
  //     ))}
  //   </nav>
  //   <div className="flex-end-center gap-1">
  //     <button onBlur={handleBlur} className=" relative">
  //       <span onClick={() => setOpenModal(!OpenModal)}>
  //         <ArrowDownIcon className={`${OpenModal && "rotate-180"} transition-all duration-500 `} />
  //       </span>
  //       <ActivityModal open={OpenModal} />
  //     </button>
  //     <UserIcon className="w-10" />
  //     <HamburgerMenu navElements={navElements} />
  //   </div>
  // </nav>
);
