import TypingEffect from "components/utils/Typingeffect";
import Link from "next/link";
import ArrowRightIcon from "public/icons/ArrowRightIcon";
import HomePatternSvg from "public/images/home/HomePatternSvg";
import RoomSvg from "public/images/home/RoomSvg";
import WallSvg from "public/images/home/WallSvg";

const HomeSection = () => {
  return (
    <>
      <section className="min-h-[350px] xxs:min-h-[420px] xs:min-h-[500px] 2xs:min-h-[550px] sm:min-h-[600px]">
        <div className="max-w-[750px] relative ml-auto w-full">
          <span className="absolute right-0 w-full max-h-[500px] [&>*]:h-full centering">
            <WallSvg />
          </span>
          <span className="absolute right-0 top-[105px] xs:top-[130px] w-full max-h-[500px] [&>*]:h-full centering z-10">
            <RoomSvg />
          </span>
        </div>
        <div className="max-h-[350px] xxs:max-h-[420px] xs:max-h-[500px] 2xs:max-h-[550px] sm:max-h-[600px] h-full [&>*]:h-full">
          <HomePatternSvg />
        </div>
        <Text />
      </section>
      <Buttons className="md:hidden" />
    </>
  );
};

export default HomeSection;

const Text = () => {
  return (
    <div className="absolute top-[70px] xs:top-[80px] 2xs:top-[90px] 2md:top-[150px] left-0 2md: z-40">
      <h3 className="font-normal text-gray-4 mb-2 text-sm xxs:xxs:text-base xs:text-lg 2xs:text-xl sm:text-2xl 2md:text-3xl lg:text-4xl">
        Lorem Ipsum is simply dummy text
      </h3>
      <h2 className="font-extrabold mb-8 text-sm xxs:text-base xs:text-lg 2xs:text-2xl sm:text-4xl 2md:text-5xl lg:text-6xl">
        <p>Learn Touch Typing</p>
        <TypingEffect dynamicText={["for free."]} />
      </h2>
      <Buttons className="hidden md:flex" />
    </div>
  );
};

const Buttons = ({ className }) => {
  return (
    <div className={`flex-start-center gap-4 ${className}`}>
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
  );
};
