"use client";
import React, { useState } from "react";
import CustomInput from "./CustomInput";

const CustomDropDown = ({ label, className, form, list }) => {
  const [value, setValue] = useState({ search: "" });

  const onClick = (item) => {
    setValue({});
  };

  return (
    <div>
      <CustomInput label={label} name="search" className={className} form={form} />
      <ul>
        {list.map((item) => {
          return (
            <li onClick={() => onClick(item)} key={item.value}>
              {item.label}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CustomDropDown;
