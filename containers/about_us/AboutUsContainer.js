import Image from "next/image";
import Mobina from "public/images/avatar/Mobina.png";
import Soheil from "public/images/avatar/Soheil.png";
import Fateme from "public/images/avatar/Fateme.png";
import Ruhollah from "public/images/avatar/Ruhollah.png";

const AboutUsContainer = () => {
  const Users = [
    { name: "Mobina Mirbagheri", position: "UiUx Design", image: Mobina },
    { name: "Fateme Rasolzadeh", position: "FrontEnd Developer", image: Fateme },
    { name: "Amir Shafikhani", position: "FrontEnd Developer", image: Soheil },
    { name: "Soheil jafarnejad", position: "FrontEnd Developer", image: Soheil },
    { name: "Ruhollah Mozafari", position: "BackEnd Developer  ", image: Ruhollah },
  ];

  return (
    <div className="px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-bold text-2xl text-center mb-5">Our Team</h2>
        <p className="mb-8 mx-auto">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature
          from 45 BC, making it over 2000 years old. Richard McClinton, a Latin professor at Hampden-Sydney College in Virginia,
          looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of
          the word in classical literature, discovered the uncountable source. Lorem Ipsum
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {Users.map((user) => (
            <OurTeamElements key={user} user={user} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUsContainer;

const OurTeamElements = ({ user }) => (
  <div className="flex-1 self-start w-full max-w-[300px] mx-auto sm:max-w-full p-6 custom-shadow-1 rounded-3xl centering flex-col bg-white">
    <Image width={120} src={user.image} alt={user.name} />
    <p className="text-gray-3 mt-5">{user.position}</p>
    <p className="text-lg font-bold mt-1">{user.name}</p>
  </div>
);
