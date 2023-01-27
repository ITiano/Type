import Image from "next/image";
import Mobina from "public/images/avatar/Mobina.png";
import Soheil from "public/images/avatar/Soheil.png";
import Fateme from "public/images/avatar/Fateme.png";
import Ruhollah from "public/images/avatar/Ruhollah.png";
import Rectangle from "public/images/public/Rectangle";

const AboutUsContainer = () => {
  const Users = [
    { name: "Mobina Mirbagheri", position: "UiUx Design ", url: Mobina },
    { name: "Soheil jafarnejad", position: "UiUx Design ", url: Soheil },
    { name: "Fateme Rasolzadeh", position: "UiUx Design ", url: Fateme },
    { name: "Ruhollah Mozafari", position: "UiUx Design ", url: Ruhollah },
  ];

  const OurTeamElements = ({ user }) => (
    <div className="p-6 custom-shadow-1 rounded-3xl centering flex-col bg-white">
      <Image width={90} src={user.url} alt={user.name} />
      <p className="text-gray-3 text-xs mt-5">{user.position}</p>
      <p className="font-bold mt-1">{user.name}</p>
    </div>
  );

  return (
    <>
      <Rectangle className="absolute top-0 -z-10" />
      <div className="max-w-3xl mx-auto mt-10 mb-20">
        <p className="font-bold text-xl text-center mb-5">Our Team</p>
        <p>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words,
          consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum{" "}
        </p>
        <div className="flex-between-start mt-8 flex-wrap ">
          {Users.map((user) => (
            <OurTeamElements user={user} />
          ))}
        </div>
      </div>
    </>
  );
};

export default AboutUsContainer;
