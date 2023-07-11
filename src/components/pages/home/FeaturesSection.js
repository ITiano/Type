import FeaturePatternSvg from "@assets/vectors/FeaturePatternSvg";
import CoursesImages from "@components/common/CoursesImages";

const boxData = [
  {
    image: { kind: 4, size: 120 },
    title: "Untitled",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos ipsa omnis officia consequatur amet corrupti ipsum libero exercitationem, repellendus pariatur, soluta ea quia iste animi voluptas fugit illo hic id.",
  },
  {
    image: { kind: 5, size: 160 },
    title: "Untitled",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos ipsa omnis officia consequatur amet corrupti ipsum libero exercitationem, repellendus pariatur, soluta ea quia iste animi voluptas fugit illo hic id.",
  },
  {
    image: { kind: 6, size: 160 },
    title: "Untitled",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos ipsa omnis officia consequatur amet corrupti ipsum libero exercitationem, repellendus pariatur, soluta ea quia iste animi voluptas fugit illo hic id.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="w-full relative mt-[130px] md:mt-[170px]">
      <FeaturePatternSvg className="w-full absolute top-1/2 -translate-y-1/2" />
      <div className="flex-center-start flex-col lg:flex-row w-full gap-10 lg:gap-12 relative z-20 [&>*]:flex-1">
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
      <h4 className="font-semibold text-3xl border-b-[6px] border-b-primary-900 pb-3 mb-3">Features</h4>
      <p className="text-gray-900">Description regarding the title</p>
    </div>
  );
};

const Box = ({ title, description, image }) => {
  return (
    <div className="centering flex-col bg-white shadow shadow-slate-200 rounded-3xl p-6">
      <CoursesImages kind={image.kind} size={image.size} />
      <h5 className="font-medium text-2xl mb-5">{title}</h5>
      <p className="text-gray-900 text-base line-clamp-3 text-center">{description}</p>
    </div>
  );
};
