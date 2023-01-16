import { useState } from "react";
import CoursesElements from "./_components/CoursesElements";

const CoursesContainer = () => {
  const [data] = useState([
    { id: 1, name: "Lesson1", status: 1 },
    { id: 2, name: "Lesson2", status: 1 },
    { id: 3, name: "Lesson3", status: 1 },
    { id: 4, name: "Lesson4", status: 2 },
    { id: 1, name: "Lesson5", status: 3 },
    { id: 2, name: "Lesson6", status: 3 },
    { id: 3, name: "Lesson7", status: 3 },
    { id: 4, name: "Lesson8", status: 3 },
  ]);
  return (
    <div className="max-w-6xl m-auto my-8 px-5 ">
      <p className="font-bold text-lg mb-5">Starting with the subject</p>
      <div className="centering flex-col gap-5">
        {data.map((item, index) => (
          <CoursesElements key={index} item={item} index={index} />
        ))}
      </div>
    </div>
  );
};

export default CoursesContainer;
