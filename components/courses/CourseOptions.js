import { useState } from "react";

// Icons
import MoreCircleIcon from "public/icons/MoreCircleIcon";

const CourseOptions = ({ course, setOpen }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const onBlur = (e) => !e.currentTarget.contains(e.relatedTarget) && setMenuOpen(false);

  return (
    <button onBlur={onBlur} className={`relative ${course?.status !== 1 && "invisible"}`}>
      <span onClick={() => course?.status === 1 && setMenuOpen(!menuOpen)} className="cursor-pointer">
        <MoreCircleIcon />
      </span>
      <ul className={`dropdown-container cursor-default ${menuOpen ? "fade-in" : "fade-out"}`}>
        <li className={`dropdown-element ${menuOpen ? "cursor-pointer opacity-100" : "!cursor-default opacity-0"}`}>Video</li>
        <li
          onClick={() => setOpen(course)}
          className={`dropdown-element ${menuOpen ? "cursor-pointer opacity-100" : "!cursor-default opacity-0"}`}
        >
          History
        </li>
      </ul>
    </button>
  );
};

export default CourseOptions;
