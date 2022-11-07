import { useEffect, useRef, useState } from "react";

const Type = ({ data = "" }) => {
  const [type, setType] = useState("");
  const [error, setError] = useState([]);
  const [show, setShow] = useState(false);
  const ref = useRef();

  const onChange = (e) => {
    const length = type.length;
    const value = e.target.value.split("");
    const pattern = data.split("");
    if (value[length] && pattern[length] && value[length]?.toString() === pattern[length]?.toString()) {
      setType(e.target.value);
      // error handling for done
      const index = error.findIndex((item) => item.id === length);
      if (index >= 0) {
        const select = { ...error[index] };
        select.completed = true;
        const clone = [...error];
        clone[index] = select;
        setError(clone);
      }
    } else {
      // error handling create history type user
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

  const errorClassName = (index) => {
    const find = error.find((item) => item.id == index);
    if (find && find.completed) return "!bg-orange-300";
    else return "";
  };

  const showLastError = (index) => {
    const find = error.find((item) => item.id == index);
    if (find && !find.completed) return { text: find.history[find.history.length - 1], className: "bg-red-400 text-white text-4xl pb-1" };
    else return { text: "", className: "" };
  };

  const onKeyDown = (e) => {
    // keyCode 16 => shift
    if (e.keyCode !== 16) {
      if (!show) setShow(true);
      setTimeout(() => {
        setShow(false);
      }, 300);
    }
  };

  useEffect(() => {
    ref.current.focus();
  });

  useEffect(() => {
    const totalError = error.reduce((sum, item) => (sum = sum + item.count), 0);
    if (data === type) {
      alert(`done, You have ${totalError} errors in ${error.length} characters`);
    }
  }, [data, error, type]);

  console.log("render");

  return (
    <div className="relative w-full">
      <div className="w-full flex-wrap flex items-center justify-center">
        {data.split("").length !== 0 &&
          data
            .split(" ")
            .reduce((sum, item, index) => {
              if (index === 0) sum = [...sum, item];
              else sum = [...sum, " ", item];
              return sum;
            }, [])
            .map((item, wordIndex) => {
              return (
                <span key={wordIndex} className="flex items-center justify-start">
                  {item.split("").map((item, index) => {
                    const length = data
                      .split(" ")
                      .reduce((sum, item, index) => {
                        if (index === 0) sum = [...sum, item];
                        else sum = [...sum, " ", item];
                        return sum;
                      }, [])
                      .slice(0, wordIndex)
                      .join("")
                      .split("").length;
                    return (
                      <span
                        key={length + index}
                        className={`mx-px min-w-[1.5rem] h-12 flex items-center justify-center text-4xl border-b-4 relative ${
                          type.length === length + index ? "border-b-blue-500" : "border-b-white"
                        } ${errorClassName(length + index)} ${type[length + index]?.toString() === item?.toString() ? "bg-green-300" : ""}`}
                      >
                        {item}
                        <span
                          className={`transition-all duration-100 absolute inset-0 flex items-center justify-center ${
                            show ? "opacity-100" : "opacity-0"
                          }  ${showLastError(length + index).className} `}
                        >
                          {showLastError(length + index).text}
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
