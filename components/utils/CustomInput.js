import { useState } from "react";
import HideIcon from "public/icons/HideIcon";
import ShowIcon from "public/icons/ShowIcon";

const CustomInput = ({ label, name, form, className, Password, handleBlur, type = "text", ...rest }) => {
  const [HidePassword, setHidePassword] = useState(true);

  const {
    register,
    formState: { errors },
  } = form;

  return (
    <div>
      <label className="px-1 block mb-1">{label}</label>
      <div className={`relative`}>
        <input
          {...rest}
          {...register(name)}
          name={name}
          autoComplete="off"
          onBlur={handleBlur}
          type={Password ? (HidePassword ? "password" : "text") : type}
          className={`input ${errors[name] ? "border-mainRed focus:border-mainRed" : "border-gray-2 focus:border-mainBlue"} ${className} ${Password ? "pr-8" : ""}`}
        />
        {Password && (
          <span className="absolute top-[.6rem] right-3 cursor-pointer" onClick={() => setHidePassword(!HidePassword)}>
            {HidePassword ? <HideIcon /> : <ShowIcon />}
          </span>
        )}
      </div>
      <p className="text-xs pl-1 text-mainRed h-4 mb-1">{errors[name]?.message}</p>
    </div>
  );
};

export default CustomInput;
