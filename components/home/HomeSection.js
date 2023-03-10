import Link from "next/link";
import routes from "routes/routes";

// typing effect
import TypingEffect from "components/utils/Typingeffect";

// images
import RoomSvg from "public/images/home/RoomSvg";
import WallSvg from "public/images/home/WallSvg";
import ArrowRightIcon from "public/icons/ArrowRightIcon";
import HomeTopPatternSvg from "public/images/home/HomeTopPatternSvg";
import HomeBottomPatternSvg from "public/images/home/HomeBottomPatternSvg";

const HomeSection = () => {
  return (
    <>
      <section className="min-h-[350px] xs:min-h-[420px] 2xs:min-h-[500px] 3xs:min-h-[550px] sm:min-h-[600px]">
        <div className="max-w-[750px] relative ml-auto w-full">
          <span className="absolute right-0 w-full max-h-[500px] [&>*]:h-full centering">
            <WallSvg />
          </span>
          <span className="absolute right-0 top-[105px] 2xs:top-[130px] w-full max-h-[500px] [&>*]:h-full centering z-10">
            <RoomSvg />
          </span>
        </div>
        <HomeTopPatternSvg className="absolute top-[30px] left-0 max-w-[50%] max-h-[50%] w-full h-full [&>*]:w-full [&>*]:h-full" />
        <HomeBottomPatternSvg className="absolute top-[calc(50%_-_10px)] left-0 max-w-[50%] max-h-[50%] w-full h-full [&>*]:w-full [&>*]:h-full" />
        <Text />
      </section>
      <Buttons className="md:hidden" />
    </>
  );
};

export default HomeSection;

const Text = () => {
  return (
    <div className="absolute top-[70px] 2xs:top-[80px] 3xs:top-[90px] 2md:top-[150px] left-0 2md: z-40">
      <h3 className="font-normal text-gray-4 mb-2 text-sm xs:xs:text-base 2xs:text-lg 3xs:text-xl sm:text-2xl 2md:text-3xl lg:text-4xl">
        Lorem Ipsum is simply dummy text
      </h3>
      <h2 className="font-extrabold mb-8 text-sm xs:text-base 2xs:text-lg 3xs:text-2xl sm:text-4xl 2md:text-5xl lg:text-6xl">
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
      <Link href={routes.courses.path} className="btn black-btn font-bold text-lg">
        Get started
      </Link>
      <Link href={routes.signup.path}>
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
