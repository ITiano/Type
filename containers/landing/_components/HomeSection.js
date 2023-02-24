import Footer from "components/common/Footer";
import CustomBtn from "components/utils/CustomBtn";
import TypingEffect from "components/utils/Typingeffect";
import Link from "next/link";
import ArrowRightIcon from "public/icons/ArrowRightIcon";
import HomePatternSvg from "public/images/home/HomePatternSvg";
import RoomSvg from "public/images/home/RoomSvg";
import WallSvg from "public/images/home/WallSvg";

const HomeSection = () => {
  return (
    <section className="min-h-[900px]">
      <span className="absolute top-[170px] right-0 z-10 ">
        <RoomSvg />
      </span>
      <span className="absolute right-0">
        <WallSvg />
      </span>
      <span className="absolute top-[200px] left-[180px] bg-red">
        <HomePatternSvg />
      </span>

      <div className="absolute top-[250px] left-[100px]">
        <h3 className="font-normal text-2xl text-gray-4 mb-2">Lorem Ipsum is simply dummy text </h3>
        <h2 className="font-extrabold text-6xl mb-8">
          <p>Learn Touch Typing</p>
          <TypingEffect dynamicText={["for free."]} />
          {/* <p>for free</p> */}
        </h2>
        <div className="flex-start-center gap-4">
          <Link href="/courses" className="btn black-btn font-bold text-lg">
            Get started
          </Link>
          <Link href="/signup">
            <div className="flex-start-center gap-1">
              <span className="font-medium text-black text-lg">Register</span>
              <span>
                <ArrowRightIcon />
              </span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
