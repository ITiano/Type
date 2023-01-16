import CustomBtn from "components/utils/CustomBtn";
import ArrowRight from "public/icons/ArrowRight";
import PatternSvg from "public/images/home/PatternSvg";
import RoomSvg from "public/images/home/RoomSvg";
import WallSvg from "public/images/home/WallSvg";

const HomeSection = () => {
  return (
    <section className="relative -top-[60px] w-full min-h-[900px]">
      <span className="absolute top-[170px] right-0 z-10 ">
        <RoomSvg />
      </span>
      <span className="absolute right-0">
        <WallSvg />
      </span>
      <span className="absolute top-[200px] left-[180px] bg-red">
        <PatternSvg />
      </span>

      <div className="absolute top-[250px] left-[100px]">
        <h3 className="font-normal text-2xl text-gray-4 mb-2">Lorem Ipsum is simply dummy text </h3>
        <h2 className="font-extrabold text-6xl mb-8">
          <p>Learn Touch Typing</p>
          <p>for free</p>
        </h2>
        <div className="flex-start-center">
          <CustomBtn text="Get started" className="black-btn" />
          <CustomBtn text="Register" className="font-medium" endIcon={<ArrowRight />} />
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
