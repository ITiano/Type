import TypingEffect from "components/utils/Typingeffect";
import Link from "next/link";
import ArrowRightIcon from "public/icons/ArrowRightIcon";
import HomePatternSvg from "public/images/home/HomePatternSvg";
import RoomSvg from "public/images/home/RoomSvg";
import WallSvg from "public/images/home/WallSvg";

const HomeSection = () => {
  return (
    <section className="min-h-[380px] xxs:min-h-[510px] 2xs:min-h-[640px] sm:min-h-[700px]">
      <div className="max-w-[750px] relative ml-auto w-full">
        <span className="absolute right-0 w-full max-h-[500px] [&>*]:h-full centering">
          <WallSvg />
        </span>
        <span className="absolute right-0 top-[105px] xs:top-[130px] w-full max-h-[500px] [&>*]:h-full centering z-10">
          <RoomSvg />
        </span>
      </div>
      <Text />
    </section>
  );
};

export default HomeSection;

const Text = () => {
  return (
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
  );
};
