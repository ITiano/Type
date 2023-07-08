"use client";
import { HideIcon, ShowIcon } from "@assets/icons/icons";
import { useState } from "react";
import React from "react";

const CustomInput = ({
  name,
  value,
  label,
  onBlur,
  onFocus,
  Password,
  disabled,
  setValue,
  className,
  type = "text",
  placeholder = "",
}) => {
  const [HidePassword, setHidePassword] = useState(true);

  const onChange = ({ target }) => {
    if (!disabled) setValue((prev) => ({ ...prev, [name]: target.value }));
  };

  return (
    <div>
      <label className="px-1 block mb-1">{label}</label>
      <div className="relative">
        <input
          onBlur={onBlur}
          onFocus={onFocus}
          name={name}
          value={value && name && value[name]}
          onChange={onChange}
          autoComplete="off"
          disabled={disabled}
          placeholder={placeholder}
          type={Password ? (HidePassword ? "password" : "text") : type}
          className={`input ${
            // errors[name]
            [].length ? "border-mainRed focus:border-mainRed" : "border-gray-2 focus:border-mainBlue"
          } ${className} ${Password ? "pr-8" : ""}`}
        />
        {Password && (
          <span className="absolute top-[.6rem] right-3 cursor-pointer" onClick={() => setHidePassword(!HidePassword)}>
            {HidePassword ? <HideIcon /> : <ShowIcon />}
          </span>
        )}
      </div>
      {/* <p className="text-xs pl-1 text-mainRed h-4 mb-1">{errors[name]?.message}</p> */}
    </div>
  );
};

export default CustomInput;
