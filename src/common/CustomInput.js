"use client";
import { HideIcon, ShowIcon } from "@assets/icons/icons";
import { useState } from "react";
import React from "react";

const Regex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const isEmailValidation = (email) => {
  if (email === "") return "Email cannot be empty";
  else if (!email.match(Regex)) return "The email is not valid";
  else return null;
};

const CustomInput = ({
  error,
  setError,
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
  const [showPassword, setShowPassword] = useState(true);

  const onChange = ({ target }) => {
    !disabled && setValue((prev) => ({ ...prev, [name]: target.value }));
    if (type === "email" && setError && error && target.value.match(Regex)) setError(null);
  };

  const blurHandler = () => {
    if (type === "email" && setError && name && value) setError(isEmailValidation(value[name]));
    onBlur && onBlur();
  };

  return (
    <div>
      <label className="px-1 block mb-1">{label}</label>
      <div className="relative">
        <input
          onBlur={blurHandler}
          onFocus={onFocus}
          name={name}
          autoComplete="off"
          onChange={onChange}
          disabled={disabled}
          placeholder={placeholder}
          value={value[name]}
          type={Password ? (showPassword ? "password" : "text") : type}
          className={`input ${
            error ? "border-red-600 focus:border-red-600" : "border-gray-700 focus:border-primary-600"
          } ${className} ${Password ? "pr-8" : ""} ${disabled && "opacity-80"}`}
        />
        {Password && (
          <span className="absolute top-[.6rem] right-3 cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <HideIcon /> : <ShowIcon />}
          </span>
        )}
      </div>
      {setError && <p className="text-xs pl-1 text-red-600 h-4 my-1">{error}</p>}
    </div>
  );
};

export default CustomInput;
