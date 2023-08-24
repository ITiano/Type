import TypingEffect from "src/common/Typingeffect";
import RoomSvg from "@assets/vectors/RoomSvg";
import WallSvg from "@assets/vectors/WallSvg";
import HomeTopPatternSvg from "@assets/vectors/HomeTopPatternSvg";
import HomeBottomPatternSvg from "@assets/vectors/HomeBottomPatternSvg";
import NavigateLinks from "./NavigateLinks";

const HomeSection = () => {
  return (
    <div className="relative">
      <section className="min-h-[350px] xs:min-h-[420px] 2xs:min-h-[500px] 3xs:min-h-[550px] sm:min-h-[600px] overflow-hidden">
        <div className="max-w-[750px] relative ml-auto w-full -mr-10 md:mr-0">
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
      <NavigateLinks className="md:hidden z-20 absolute -bottom-5 pl-4" />
    </div>
  );
};

export default HomeSection;

const Text = () => {
  return (
    <div className="absolute top-[70px] 2xs:top-[80px] 3xs:top-[90px] 2md:top-[150px] left-0 2md: z-40 pl-4">
      <h3 className="font-normal text-gray-900 mb-2 xs:text-xl sm:text-2xl 2md:text-3xl">Become a typist with typiano</h3>
      <h2 className="font-extrabold mb-8 xs:text-xl sm:text-4xl 2md:text-5xl lg:text-6xl select-none">
        <p>Learn Touch Typing</p>
        <TypingEffect dynamicText={["for free."]} />
      </h2>
      <NavigateLinks className="hidden md:flex" />
    </div>
  );
};
