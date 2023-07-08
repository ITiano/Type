import React from "react";
const CustomTextArea = ({ name, label, value, setValue, className, placeholder, disabled }) => {
  
  const onChange = ({ target }) => {
    if (!disabled) setValue((prev) => ({ ...prev, [name]: target.value }));
  };

  return (
    <>
      <label className="px-1 block mb-1">{label}</label>
      <textarea
        rows={4}
        name={name}
        disabled={disabled}
        autoComplete="off"
        value={value[name]}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full px-3 py-1 bg-white text-sm border-2 rounded-md ${
          // touched[name] && errors[name]
          [].length ? "border-pink-500 focus:border-pink-500" : "border-gray-2 focus:border-mainBlue"
        } ${className} `}
      />
      {/* <p className="text-xs pl-1 text-pink-600 h-4 mb-1">{touched[name] && errors[name]}</p> */}
    </>
  );
};

export default CustomTextArea;
