import CheckIcon from "public/icons/CheckIcon";

const CoursesElements = () => (
  <div className="flex-between-center bg-white w-full px-4 rounded-xl">
    <div className="flex-start-center gap-3">
      <img src={"/images/courses/coffee.png"} width={70} alt="image" />
      <div>
        <p className=" font-semibold">lesson1</p>
        <p className="text-gray-dark text-[.65rem]">5min . 8 exercises</p>
      </div>
    </div>
    <CheckIcon />
  </div>
);

export default CoursesElements;
