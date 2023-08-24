"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import CustomInput from "./CustomInput";

const CustomDropDown = ({ label, className, list, setValue, value, name }) => {
  const [form, setForm] = useState({ search: "" });
  const [open, setOpen] = useState(false);
  const containerRef = useRef();

  const onClick = useCallback(
    (item) => {
      setValue((prev) => ({ ...prev, [name]: item }));
      setForm({ search: item.label });
      setOpen(false);
    },
    [name, setValue]
  );

  useEffect(() => {
    if (open) {
      const blurHandler = (e) => !containerRef.current.contains(e.target) && setOpen(false);
      window.addEventListener("click", blurHandler);
      return () => window.removeEventListener("click", blurHandler);
    }
  }, [open]);

  useEffect(() => {
    if (value && value[name]) {
      if (typeof value[name] === "number" || typeof value[name] === "string") {
        const find = list.find((item) => item.value === +value[name]);
        onClick(find);
      } else setForm({ search: value[name].label });
    }
  }, [list, name, onClick, value]);

  return (
    <div className="relative" ref={containerRef}>
      <CustomInput value={form} label={label} name="search" className={className} onFocus={() => setOpen(true)} />
      <div className={`overflow-hidden absolute w-full top-[calc(100%)] ${open ? "fade-in" : "fade-out"} z-40`}>
        <ul className="bg-white rounded-md overflow-hidden">
          {list.map((item) => {
            return (
              <li
                className="px-4 py-1.5 cursor-pointer transition hover:bg-primary-900/40"
                onClick={() => onClick(item)}
                key={item.value}
              >
                {item.label}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default CustomDropDown;
