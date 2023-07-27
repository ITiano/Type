import React from "react";
import Image from "next/image";
import routes from "@routes/routes";

export const metadata = { title: routes.aboutUs.title };

const teamMembers = [
  { name: "Mobina Mirbagheri", position: "UiUx Design", image: "/images/avatar/Mobina.png" },
  { name: "Fateme Rasolzadeh", position: "FrontEnd Developer", image: "/images/avatar/Fateme.png" },
  { name: "Amir Shafikhani", position: "FrontEnd Developer", image: "/images/avatar/Amir.png" },
  { name: "Soheil jafarnejad", position: "FrontEnd Developer", image: "/images/avatar/Soheil.png" },
  { name: "Ruhollah Mozafari", position: "BackEnd Developer  ", image: "/images/avatar/Ruhollah.png" },
];

const AboutUs = () => {
  return (
    <section className="px-4 mt-28 p-layout">
      <h2 className="font-bold text-2xl text-center mb-5">Our Team</h2>
      <p className="text-justify mb-14">
        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature
        from 45 BC, making it over 2000 years old. Richard McClinton, a Latin professor at Hampden-Sydney College in Virginia,
        looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the
        word in classical literature, discovered the uncountable source. Lorem Ipsum
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {teamMembers.map((teamMember) => (
          <TeamMember key={teamMember.name} {...teamMember} />
        ))}
      </div>
    </section>
  );
};

export default AboutUs;

const TeamMember = ({ image, name, position }) => (
  <div className="flex-1 self-start w-full max-w-[300px] mx-auto sm:max-w-full p-6 shadow-lg rounded-3xl centering flex-col bg-white">
    <Image width={120} height={120} src={image} alt={name} />
    <p className="text-gray-800 mt-5">{position}</p>
    <p className="text-lg font-bold mt-1">{name}</p>
  </div>
);
