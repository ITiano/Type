import Image from "next/image";

import Vlc from "public/images/courses/vlc.png";
import Book from "public/images/courses/book.png";
import Pencils from "public/images/courses/Pencils.png";
import FeaturePatternSvg from "public/images/home/FeaturePatternSvg";

const FeaturesSection = () => {
  return (
    <section className="w-full relative h-[800px]">
      <FeaturePatternSvg className="w-full absolute inset-x-0" />
      <div className="absolute flex-start-start w-full !justify-center gap-16">
        <Box
          image={Book}
          title="Untitled"
          description="Description regarding the title tesst ts tesst ts Description regarding the title Description regarding the ..."
        />
        <div className="centering flex-col">
          <h4 className="font-semibold text-3xl border-b-[6px] border-b-mainBlue pb-3 mb-3">Features</h4>
          <p className="text-gray-4 mb-16">Description regarding the title</p>
          <Box
            image={Pencils}
            title="Untitled"
            description="Description regarding the title tesst ts tesst ts Description regarding the title Description regarding the ..."
          />
        </div>
        <Box
          image={Vlc}
          title="Untitled"
          description="Description regarding the title tesst ts tesst ts Description regarding the title Description regarding the ..."
        />
      </div>
    </section>
  );
};

export default FeaturesSection;

const Box = ({ title, description, image }) => {
  return (
    <div className="centering flex-col bg-white shadow shadow-slate-100 rounded-3xl w-[23rem] h-[23rem] p-8">
      <Image src={image} alt={title} width="150" height="150" />
      <h5 className="font-medium text-2xl mb-5">{title}</h5>
      <p className="text-gray-4 text-base">{description}</p>
    </div>
  );
};
