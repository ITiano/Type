import FeaturePatternSvg from "@assets/vectors/FeaturePatternSvg";
import CoursesImages from "src/common/CoursesImages";

const boxData = [
  {
    image: { kind: 4, size: 110, className: "mt-5" },
    title: "Interactive Lessons",
    description:
      "Typiano offers interactive typing lessons that guide users through proper finger placement, key exercises, and progressively challenging typing drills.",
  },
  {
    image: { kind: 5, size: 160, className: "-mb-8" },
    title: "Typing Certifications",
    description:
      "The option to earn typing certificates or badges upon achieving specific typing proficiency levels adds motivation for users to excel.",
  },
  {
    image: { kind: 6, size: 160, className: "-mb-8" },
    title: "Error Analysis",
    description:
      "Providing feedback on common mistakes and areas for improvement can help learners identify and correct their typing errors.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="w-full relative mt-[130px] md:mt-[170px]">
      <FeaturePatternSvg className="w-full absolute top-1/2 -translate-y-1/2" />
      <div className="flex-center-start flex-col lg:flex-row w-full gap-10 lg:gap-12 relative z-20 [&>*]:flex-1 p-layout">
        <FeaturesText className="lg:hidden mb-3" />
        {boxData.map((box, index) => (
          <div key={index} className="flex flex-col gap-12 max-w-[400px] mx-auto">
            {index === 1 && <FeaturesText className="hidden lg:flex" />}
            <Box {...box} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;

const FeaturesText = ({ className }) => {
  return (
    <div className={`centering flex-col w-full ${className}`}>
      <h4 className="font-semibold text-2xl md:text-3xl border-b-4 md:border-b-[6px] border-b-primary-900 pb-3 mb-3">Features</h4>
      <p className="text-gray-900">Description regarding the title</p>
    </div>
  );
};

const Box = ({ title, description, image }) => {
  return (
    <div className="centering flex-col bg-white shadow border-t border-t-slate-200 shadow-slate-200 rounded-3xl p-6">
      <div className={image.className}>
        <CoursesImages kind={image.kind} size={image.size} />
      </div>
      <h5 className="font-medium text-lg md:text-xl mb-3 md:mb-5 whitespace-nowrap">{title}</h5>
      <p className="text-gray-900 md:text-base text-center">{description}</p>
    </div>
  );
};
