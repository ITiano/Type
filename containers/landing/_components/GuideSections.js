import Image from "next/image";
import KeyboardIcon from "public/icons/Finger/KeyboardIcon";
import { useEffect, useState } from "react";
import FingerLeft from "public/icons/Finger/FingerLeft.png";
import FingerRight from "public/icons/Finger/FingerRight.png";

const GuideSections = () => {
  const [position, setPosition] = useState(50);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setPosition((p) => (p >= 0 ? p - 10 : p + 10));
  //   }, [100]);
  //   return clearInterval();
  // }, [position]);

  return (
    <div className="centering flex-col w-full mt-48 mb-72">
      <div className="bg-gray-1 py-12 px-20 rounded-2xl relative">
        <h2 className="font-semibold text-4xl text-center mb-2">10-finger typing guide</h2>
        <p className="text-base text-gray-3 text-center mb-7">how to place your fingers on the keys of the key board</p>
        <p className="text-2xl text-center mb-7">Try to remember the locations of the buttons</p>

        <div className="centering gap-2 mb-7">
          <span className="bg-orange-400 w-12 h-3 rounded-full"></span>
          <span className="bg-orange-400 w-3 h-3 rounded-full"></span>
          <span className="bg-orange-400 w-3 h-3 rounded-full"></span>
          <span className="bg-orange-400 w-3 h-3 rounded-full"></span>
        </div>

        <div className="">
          <KeyboardIcon />

          <Image src={FingerLeft} alt="" width="400" height="400" className="absolute -bottom-[9rem] -left-16" />
          <Image src={FingerRight} alt="" width="400" height="400" className="absolute -bottom-[9rem] -right-16" />
        </div>
      </div>
    </div>
  );
};

export default GuideSections;
