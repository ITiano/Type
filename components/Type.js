import { useState } from "react";

const Type = ({ data }) => {
  const [type, setType] = useState("");
  const [error, setError] = useState("");

  const onChange = (e) => {
    const length = type.length;
    const value = e.target.value.split("");
    if (value[length] === data[length] && value[length] && data[length]) {
      setType(e.target.value);
      setError(false);
    } else setError(true);
  };

  return (
    <div className="relative">
      <div>
        {data.length !== 0 &&
          data.map((item, index) => {
            return (
              <span
                className={`mx-1 px-1 text-4xl ${index === type.length && error ? "bg-red-100" : ""} ${type[index] === item ? "bg-green-100" : "bg-gray-100"}`}
                key={index}
              >
                {item}
              </span>
            );
          })}
      </div>
      <input autoFocus className="resize-none absolute inset-0 opacity-0" type="text" value={type} onChange={onChange} />
    </div>
  );
};

export default Type;
