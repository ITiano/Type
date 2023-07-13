import { useCallback, useEffect, useRef, useState } from "react";
import ProgressLine from "./ProgressLine";
import React from "react";
import CourseShowDetails from "./CourseShowDetails";

const errorColor = "bg-red-800";
const successColor = "bg-green-900/50";
const warningColor = "!bg-orange-300";
const borderLineColor = "border-b-blue-500";

const defaultAccuracy = 10;

const Type = ({ data = "", setStep, value, setValue }) => {
  const [type, setType] = useState("");
  const [error, setError] = useState(false);
  const [historyError, setHistoryError] = useState([]);
  const [isStarted, setIsStarted] = useState(false);
  const [convertedText, setConvertedText] = useState([]);
  const temp = useRef({ historyError, type });

  useEffect(() => {
    const splitted = data.split(" ");
    const converted = splitted.reduce((sum, item, index) => {
      return index ? [...sum, " ", item] : [...sum, item];
    }, []);
    setConvertedText(converted);
  }, [data]);

  useEffect(() => {
    temp.current = { historyError, type };
  }, [historyError, type]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isStarted) {
        const { historyError, type } = temp.current;
        const typeEntries = type.length;
        setValue((prev) => {
          const duration = prev.duration + 1;
          let timePerMinute = duration / 60;
          timePerMinute = timePerMinute < 0 ? 1 : timePerMinute;
          const speed = Math.ceil(typeEntries / 5 / timePerMinute) || 0;
          const totalError = historyError.reduce((sum, item) => (sum = sum + item.count), 0);
          let accuracy = ((typeEntries - totalError) * 100) / typeEntries;
          accuracy = Math.ceil(accuracy > 0 ? accuracy : defaultAccuracy);
          const score = Math.ceil(accuracy / 20);
          if (typeEntries === data.length) setStep(3);
          return { score, speed, accuracy, duration };
        });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [data, isStarted, setValue, setStep]);

  const onChange = useCallback(
    ({ target }) => {
      !isStarted && setIsStarted(true);
      if (type.length !== data.length || !type.length) {
        const length = type.length;
        const value = target.value.split("");
        const pattern = data.split("");
        if (value[length] && pattern[length] && value[length]?.toString() === pattern[length]?.toString()) {
          setType(target.value);
          // turnoff error
          const index = historyError.findIndex((item) => item.id === length);
          if (index >= 0) {
            const select = { ...historyError[index] };
            select.completed = true;
            const clone = [...historyError];
            clone[index] = select;
            setHistoryError(clone);
          }
        } else {
          //  turnon error and create history error type
          const index = historyError.findIndex((item) => item.id === length);
          if (index >= 0) {
            const select = { ...historyError[index] };
            select.count = select.count + 1;
            select.history = [...select.history, value[length]];
            const clone = [...historyError];
            clone[index] = select;
            setHistoryError(clone);
          } else {
            setHistoryError([...historyError, { id: length, count: 1, history: [value[length]], completed: false }]);
          }
        }
      }
    },
    [data, historyError, isStarted, type.length]
  );

  const currentWordLength = useCallback(
    (wordIndex) => convertedText.slice(0, wordIndex).join("").split("").length,
    [convertedText]
  );

  const showLastErrorClassName = useCallback(
    (index) => {
      const find = historyError.find((item) => item.id == index);
      return find && find.completed ? warningColor : "";
    },
    [historyError]
  );

  const showNowError = useCallback(
    (index) => {
      const find = historyError.find((item) => item.id == index);
      if (find && !find.completed)
        return { text: find.history[find.history.length - 1], className: `${errorColor} text-white text-4xl pb-1` };
      else return { text: "", className: "" };
    },
    [historyError]
  );

  const onKeyDown = useCallback(
    ({ keyCode }) => {
      const isWordKeyCode = keyCode >= 48 && keyCode <= 90;
      const isNumberKeyCode = keyCode >= 96 && keyCode <= 111;
      const isSymbol = keyCode === 173 || keyCode === 188 || keyCode === 190 || keyCode === 191 || keyCode === 192;
      // 173 => Underline || 188 => Comma || 190 => Period || 191 => Slash || 192 => Backtick
      const isSymbol2 = keyCode === 219 || keyCode === 220 || keyCode === 221 || keyCode === 222;
      // 219 => BracketLeft || 220 => Backslash || 221 => BracketRight || 222 => Quote'
      if (isWordKeyCode || isNumberKeyCode || isSymbol || isSymbol2) {
        if (!error) setError(true);
        setTimeout(() => setError(false), 200);
      }
    },
    [error]
  );

  return (
    <div className="flex-start-start flex-col w-full flex-1">
      <ProgressLine data={data} type={type} />
      <CourseShowDetails value={value} className="flex-between-center flex-col gap-8 mb-6 3xs:divide-x 3xs:gap-0 3xs:flex-row" />
      <div className="relative w-full flex-1">
        <div className="w-full flex-wrap gap-y-8 flex-start-center">
          {data.split("").length !== 0 &&
            convertedText.map((item, wordIndex) => {
              return (
                <span key={wordIndex} className="flex-start-center">
                  {item.split("").map((item, index) => {
                    const length = currentWordLength(wordIndex);
                    return (
                      <span
                        key={length + index}
                        className={`mx-px min-w-[1.5rem] h-14 flex-start-center text-4xl border-b-4 rounded-sm relative ${
                          type.length === length + index ? borderLineColor : "border-b-white"
                        } ${showLastErrorClassName(length + index)} ${
                          type[length + index]?.toString() === item?.toString() ? successColor : ""
                        }`}
                      >
                        {item}
                        <span
                          className={`transition absolute inset-0 flex-start-center ${error ? "opacity-100" : "opacity-0"}  ${
                            showNowError(length + index).className
                          } `}
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
      </div>
      <input
        autoFocus
        type="text"
        value={type}
        onChange={onChange}
        onKeyDown={onKeyDown}
        className="resize-none fixed z-10 inset-0 w-full h-full opacity-0 !cursor-default"
      />
    </div>
  );
};

export default Type;
