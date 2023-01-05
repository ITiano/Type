import HideIcon from "public/icons/HideIcon";
import ShowIcon from "public/icons/ShowIcon";
import { useState } from "react";

const CustomInput = ({ label, formik, name, className, Password, type = "text", ...rest }) => {
  const [HidePassword, setHidePassword] = useState(true);
  const { values, handleChange, touched, errors } = formik;
  return (
    <>
      <p className="px-1 mb-1">{label}</p>
      <div className={`relative`}>
        {/* {startIcon} */}
        <input
          autoComplete="off"
          className={`w-full px-3 py-1.5 bg-white text-sm focus:outline-none border-2 focus:border-mainBlue rounded-md ${
            touched[name] && errors[name] ? "border-pink-500 " : ""
          } ${className} ${Password ? "pr-8" : ""}`}
          name={name}
          value={values[name]}
          onChange={handleChange}
          type={Password ? (HidePassword ? "password" : "text") : type}
          {...rest}
        />
        {/* {endIcon} */}
        {Password && (
          <span className="absolute top-[.6rem] right-3 cursor-pointer" onClick={() => setHidePassword(!HidePassword)}>
            {HidePassword ? <HideIcon /> : <ShowIcon />}
          </span>
        )}
      </div>
      <p className="text-xs pl-1 text-pink-600 h-4 mb-1">{touched[name] && errors[name]}</p>
    </>
  );
};

export default CustomInput;
