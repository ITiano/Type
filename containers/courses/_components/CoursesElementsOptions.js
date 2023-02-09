const CoursesElementsOptions = ({ open }) => {
  return (
    <ul className={`dropdown-container ${open ? "opacity-100" : "opacity-0"}`}>
      <li className="dropdown-element">Video</li>
      <li className="dropdown-element">History</li>
    </ul>
  );
};

export default CoursesElementsOptions;
