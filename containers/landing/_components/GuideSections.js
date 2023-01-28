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
    <div className=" centering w-full">
      <div className="relative h-[700px] bg-gray-2 p-16 rounded-2xl">
        <KeyboardIcon />
        <div
          className={`centering flex-1 w-full absolute top-40 pr-20`}
          style={{
            left: `${position}px`,
          }}
        >
          <Image src={FingerLeft} alt="" width="400" height="400" />
          <Image src={FingerRight} alt="" width="400" height="400" />
        </div>
      </div>
    </div>
  );
};

export default GuideSections;
