import CustomBtn from "components/utils/CustomBtn";
import FingerLeftIcon from "public/icons/Finger/FingerLeftIcon";
import FingerRightIcon from "public/icons/Finger/FingerRightIcon";
import KeyboardIcon from "public/icons/Finger/KeyboardIcon";
import { useEffect, useState } from "react";

const Keyboard = () => {
  const [position, setPosition] = useState(50);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setPosition(position + 10);
  //   }, [100]);
  //   return clearInterval();
  // }, [position]);

  return (
    <div className="relative centering w-full min-h-screen">
      <CustomBtn text="ssss" />
      <div>
        <KeyboardIcon />
      </div>
      <div
        className={`centering absolute top-36`}
        style={{
          left: `${position}px`,
        }}
      >
        <FingerLeftIcon />
        <FingerRightIcon />
      </div>
    </div>
  );
};

export default Keyboard;
