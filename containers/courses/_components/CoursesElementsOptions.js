import { useState } from "react";
import MoreCircleIcon from "public/icons/MoreCircleIcon";

const CoursesElementsOptions = () => {
  const [OpenMenu, setOpenMenu] = useState(false);

  const handleBlur = (e) => {
    if (!e.currentTarget.contains(e.relatedTarget)) setOpenMenu(false);
  };

  return (
    <button onBlur={handleBlur} className="relative">
      <span onClick={() => setOpenMenu(!OpenMenu)} className="cursor-pointer">
        <MoreCircleIcon />
      </span>
      <ul className={`dropdown-container cursor-default ${OpenMenu ? "opacity-100" : "opacity-0 "}`}>
        <li className={`dropdown-element ${OpenMenu ? "cursor-pointer" : "!cursor-default"}`}>Video</li>
        <li className={`dropdown-element ${OpenMenu ? "cursor-pointer" : "!cursor-default"}`}>History</li>
      </ul>
    </button>
  );
};

export default CoursesElementsOptions;
