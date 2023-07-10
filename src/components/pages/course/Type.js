import { useEffect, useRef, useState } from "react";
import ProgressLine from "./ProgressLine";
import React from "react";

const errorColor = "bg-red-800";
const successColor = "bg-green-900/50";
const warningColor = "!bg-orange-300";
const borderLineColor = "border-b-blue-500";

const Type = ({ data = "", setStep, setValue }) => {
  const ref = useRef();
  const [type, setType] = useState("");
  const [error, setError] = useState([]);
  const [show, setShow] = useState(false);
  const [isStarted, setIsStarted] = useState(false);
  const [convertedText, setConvertedText] = useState([]);

  useEffect(() => {
    if (isStarted) {
      const interval = setInterval(
        () =>
          setValue((prev) => {
            const allTypeEntries = type.length;
            const timePerMinute = prev.duration / 60;
            const speed = Math.floor(allTypeEntries / 5 / timePerMinute) || 0;
            return { ...prev, speed, duration: prev.duration + 1 };
          }),

        1000
      );
      return () => clearInterval(interval);
    }
  }, [isStarted, setValue, type.length]);

  const onChange = (e) => {
    setIsStarted(true);
    const length = type.length;
    const value = e.target.value.split("");
    const pattern = data.split("");
    if (value[length] && pattern[length] && value[length]?.toString() === pattern[length]?.toString()) {
      setType(e.target.value);
      // turnoff error
      const index = error.findIndex((item) => item.id === length);
      if (index >= 0) {
        const select = { ...error[index] };
        select.completed = true;
        const clone = [...error];
        clone[index] = select;
        setError(clone);
      }
    } else {
      //  turnon error and create history error type
      const index = error.findIndex((item) => item.id === length);
      if (index >= 0) {
        const select = { ...error[index] };
        select.count = select.count + 1;
        select.history = [...select.history, value[length]];
        const clone = [...error];
        clone[index] = select;
        setError(clone);
      } else {
        setError([...error, { id: length, count: 1, history: [value[length]], completed: false }]);
      }
    }
  };

  const currentWordLength = (wordIndex) => convertedText.slice(0, wordIndex).join("").split("").length;

  const showLastErrorClassName = (index) => {
    const find = error.find((item) => item.id == index);
    return find && find.completed ? warningColor : "";
  };

  const showNowError = (index) => {
    const find = error.find((item) => item.id == index);
    if (find && !find.completed)
      return { text: find.history[find.history.length - 1], className: `${errorColor} text-white text-4xl pb-1` };
    else return { text: "", className: "" };
  };

  const onKeyDown = (e) => {
    if (
      (e.keyCode >= 48 && e.keyCode <= 90) ||
      (e.keyCode >= 96 && e.keyCode <= 111) ||
      e.keyCode === 173 ||
      e.keyCode === 188 ||
      e.keyCode === 190 ||
      e.keyCode === 191 ||
      e.keyCode === 192 ||
      e.keyCode === 219 ||
      e.keyCode === 220 ||
      e.keyCode === 221 ||
      e.keyCode === 222
    ) {
      if (!show) setShow(true);
      setTimeout(() => {
        setShow(false);
      }, 200);
    }
  };

  useEffect(() => {
    ref.current.focus();
  }, []);

  useEffect(() => {
    const splitted = data.split(" ");
    const converted = splitted.reduce((sum, item, index) => {
      return index ? [...sum, " ", item] : [...sum, item];
    }, []);
    setConvertedText(converted);
  }, [data]);

  return (
    <div className="bg-red-100">
      <ProgressLine data={data} type={type} error={error} setStep={setStep} />
      <div className="relative w-full">
        <div className="w-full flex-wrap gap-y-8 flex items-center justify-start">
          {data.split("").length !== 0 &&
            convertedText.map((item, wordIndex) => {
              return (
                <span key={wordIndex} className="flex items-center justify-start">
                  {item.split("").map((item, index) => {
                    const length = currentWordLength(wordIndex);
                    return (
                      <span
                        key={length + index}
                        className={`mx-px min-w-[1.5rem] h-14 flex items-center justify-center text-4xl border-b-4 rounded-sm relative ${
                          type.length === length + index ? borderLineColor : "border-b-white"
                        } ${showLastErrorClassName(length + index)} ${
                          type[length + index]?.toString() === item?.toString() ? successColor : ""
                        }`}
                      >
                        {item}
                        <span
                          className={`transition absolute inset-0 flex items-center justify-center ${
                            show ? "opacity-100" : "opacity-0"
                          }  ${showNowError(length + index).className} `}
                        >
                          {showNowError(length + index).text}
                        </span>
                      </span>
                    );
                  })}
                </span>
              );
            })}
        </div>

        <input
          ref={ref}
          autoFocus
          type="text"
          value={type}
          onChange={onChange}
          onKeyDown={onKeyDown}
          className="resize-none absolute inset-0 w-full h-full opacity-0"
        />
      </div>
      <input
        ref={ref}
        onKeyDown={onKeyDown}
        autoFocus
        className="resize-none absolute inset-0 w-full h-full opacity-0"
        type="text"
        value={type}
        onChange={onChange}
      />
    </div>
  );
};

export default Type;
