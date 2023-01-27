import Footer from "components/common/Footer";
import TopNav from "components/common/TopNav";
import Image from "next/image";

import vlc from "public/images/public/vlc.png";

const NotFound = () => {
  return (
    <section className="centering gap-8">
      <Image width={150} src={vlc} lt="" />
      <div>
        <p className="text-3xl font-bold">Error!</p>
        <p className="text-gray-3 text-base my-1">Somethings went wraong please try later</p>
      </div>
    </section>
  );
};

export default NotFound;

NotFound.TopNav = TopNav;
NotFound.Footer = Footer;
