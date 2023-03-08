import { useState } from "react";
import MoreCircleIcon from "public/icons/MoreCircleIcon";

const CoursesElementsOptions = ({ status }) => {
  const [open, setOpen] = useState(false);

  const onBlur = (e) => !e.currentTarget.contains(e.relatedTarget) && setOpen(false);

  return (
    <button onBlur={onBlur} className={`relative ${status !== 1 && "invisible"}`}>
      <span onClick={() => status === 1 && setOpen(!open)} className="cursor-pointer">
        <MoreCircleIcon />
      </span>
      <ul className={`dropdown-container cursor-default ${open ? "opacity-100" : "opacity-0"}`}>
        <li className={`dropdown-element ${open ? "cursor-pointer opacity-100" : "!cursor-default opacity-0"}`}>Video</li>
        <li className={`dropdown-element ${open ? "cursor-pointer opacity-100" : "!cursor-default opacity-0"}`}>History</li>
      </ul>
    </button>
  );
};

export default CoursesElementsOptions;
