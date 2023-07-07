import { useEffect, useState } from "react";
import LighteningIcon from "public/icons/LighteningIcon";

const ProgressLine = ({ data, type, error, setStep }) => {
    const [progress, setProgress] = useState(0);
    
    useEffect(() => {
        setProgress((type.length * 100) / data.length);
    }, [data.length, type.length]);
    
    useEffect(() => {
        if (progress === 100) {
            const totalError = error.reduce((sum, item) => (sum = sum + item.count), 0);
            alert(`done, You have ${totalError} errors in ${error.length} characters`);
            setStep(3);
        }
    }, [data, error, error.length, progress, setStep, type]);
    
    return (
        <div className="relative w-10/12 mt-14">
      <div className="bg-gray-3 bg-opacity-30 h-3 rounded-full relative overflow-hidden">
        <span
          style={{ width: progress + "%" }}
          className="absolute top-1/2 left-0 -translate-y-1/2 bg-black h-full transition-all duration-200"
          ></span>
      </div>
      <span
        style={{ left: `calc(${progress}% - 13px)` }}
        className={`absolute top-1/2 -translate-y-1/2 w-[26px] h-[26px] bg-black rounded-full centering p-1 transition-all duration-200`}
        >
        <LighteningIcon />
      </span>
    </div>
  );
};

export default ProgressLine