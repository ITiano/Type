import { LighteningIcon } from "@assets/icons/icons";
import { useEffect, useState } from "react";
import React from "react";

const ProgressLine = ({ data, type }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress((type.length * 100) / data.length);
  }, [data.length, type.length]);

  return (
    <div className="relative w-full my-10">
      <div className="bg-gray-800 bg-opacity-30 h-3 rounded-full relative overflow-hidden">
        <span
          style={{ width: progress + "%" }}
          className="absolute top-1/2 left-0 -translate-y-1/2 bg-black h-full transition-all !duration-[500ms]"
        ></span>
      </div>
      <span
        style={{ left: `calc(${progress}% - 13px)` }}
        className={`absolute top-1/2 -translate-y-1/2 w-[26px] h-[26px] bg-black rounded-full centering p-1 transition-all !duration-[500ms]`}
      >
        <LighteningIcon />
      </span>
    </div>
  );
};

export default ProgressLine;
