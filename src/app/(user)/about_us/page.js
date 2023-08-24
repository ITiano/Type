/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import routes from "@routes/routes";
import Link from "next/link";

export const metadata = { title: routes.aboutUs.title };

const teamMembers = [
  {
    width: 120,
    height: 130,
    position: "UiUx Design",
    name: "Mobina Mirbagheri",
    image: "/images/avatar/Mobina.png",
    href: "https://www.linkedin.com/in/mobina-m-7645b0152/",
  },
  {
    width: 120,
    height: 130,
    name: "Fateme Rasolzadeh",
    position: "FrontEnd Developer",
    image: "/images/avatar/Fateme.png",
    href: "https://www.linkedin.com/in/fatemerasolzade/",
  },
  {
    width: 120,
    height: 130,
    name: "Soheil jafarnejad",
    position: "FrontEnd Developer",
    image: "/images/avatar/Soheil.png",
    href: "https://www.linkedin.com/in/soheiljafarnejad/",
  },
  {
    width: 110,
    height: 130,
    name: "Amir Shafikhani",
    position: "FrontEnd Developer",
    image: "/images/avatar/Amir.png",
    href: "https://www.linkedin.com/in/amirshafikhani",
  },
  {
    width: 120,
    height: 130,
    name: "Ruhollah Mozafari",
    position: "BackEnd Developer  ",
    image: "/images/avatar/Ruhollah.png",
    href: "https://www.linkedin.com/in/ruhollahmozafari/",
  },
];

const AboutUs = () => {
  return (
    <section className="px-4 mt-28 p-layout">
      <h2 className="font-bold text-2xl text-center mb-5">Our Team</h2>
      <p className="text-justify mb-14 leading-6">
        Together, we form a vibrant and united team, flourishing through collaboration and embracing every challenge that comes
        our way. We firmly believe that the combination of diverse talents and perspectives ignites the fire of creativity within
        us, empowering us to overcome any obstacle that may arise. Our unyielding dedication to continuous learning. At
        <Link href="https://github.com/ITiano" className="text-primary-900 font-bold px-1" target="_blank">
          ITiano
        </Link>
        , we are more than just developers; we are dreamers, innovators, and builders. Our purpose is not solely to write lines of
        code, but to visualize dreams, pioneer innovation, and construct remarkable solutions that leave a positive impact. So,
        Share your aspirations, and let us shape them into reality. As your trusted partners, we are devoted to turning your
        vision into a tangible success story. Together, we'll illuminate the path towards a brighter future, fueled by
        cutting-edge technology and shared ambition. From inception to completion, we stand by your side. As we join forces, we
        unveil a world where possibilities are endless, and your ideas hold the potential to transform lives. Rest assured, we are
        ready, eager, and committed to making your dreams a reality.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {teamMembers.map((item) => (
          <TeamMember key={item.name} {...item} />
        ))}
      </div>
    </section>
  );
};

export default AboutUs;

const TeamMember = ({ image, name, position, href, height, width }) => (
  <Link
    target="_blank"
    href={href}
    className="flex-1 self-start w-full max-w-[300px] h-[250px] mx-auto sm:max-w-full p-6 shadow-lg rounded-3xl centering flex-col bg-white"
  >
    <div className="relative" style={{ height: height + "px", width: width + "px" }}>
      <Image fill className="w-full h-full" src={image} alt={name} />
    </div>
    <p className="text-gray-800 mt-5">{position}</p>
    <p className="text-lg font-bold mt-1">{name}</p>
  </Link>
);
