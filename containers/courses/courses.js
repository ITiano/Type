import { useState } from "react";
import RowVerticalIcon from "public/icons/GridIcon";
import RowHorizontalIcon from "public/icons/RowIcon";
import CoursesRowElements from "./_components/CoursesRowElements";
import CoursesGridElements from "./_components/CoursesGridElements";

const CoursesContainer = () => {
  const [RowKind, setRowKind] = useState(1);

  const [data] = useState([
    { id: 1, name: "Lesson1", status: 1, rating: 4, score: 1000, speed: 30, accuracy: 100, duration: "00:04" },
    { id: 2, name: "Lesson2", status: 1, rating: 4, score: 1000, speed: 30, accuracy: 100, duration: "00:04" },
    { id: 3, name: "Lesson3", status: 1, rating: 4, score: 1000, speed: 30, accuracy: 100, duration: "00:04" },
    { id: 4, name: "Lesson4", status: 2, rating: 4, score: 1000, speed: 30, accuracy: 100, duration: "00:04" },
    { id: 1, name: "Lesson5", status: 3, rating: 4, score: 1000, speed: 30, accuracy: 100, duration: "00:04" },
    { id: 2, name: "Lesson6", status: 3, rating: 4, score: 1000, speed: 30, accuracy: 100, duration: "00:04" },
    { id: 3, name: "Lesson7", status: 3, rating: 4, score: 1000, speed: 30, accuracy: 100, duration: "00:04" },
    { id: 4, name: "Lesson8", status: 3, rating: 4, score: 1000, speed: 30, accuracy: 100, duration: "00:04" },
  ]);
  return (
    <div className="max-w-6xl w-full m-auto my-4 px-3 mt-20">
      <div className="flex-between-center mb-5">
        <p className="font-bold text-lg ">Starting with the subject</p>
        <div className="flex-end-center gap-3">
          <p className="text-gray-3">View</p>
          <span className="flex-end-center gap-3 bg-gray-3 bg-opacity-20 px-1.5 py-1 rounded-full">
            <span onClick={() => setRowKind(1)} className={`p-2 rounded-full transition ${RowKind === 1 ? " bg-mainBlue" : "cursor-pointer"}`}>
              <RowVerticalIcon className={`${RowKind === 1 ? "text-white" : ""}`} />
            </span>
            <span onClick={() => setRowKind(2)} className={`p-2 rounded-full transition ${RowKind === 2 ? " bg-mainBlue" : "cursor-pointer"}`}>
              <RowHorizontalIcon className={`${RowKind === 2 ? "text-white" : ""}`} />
            </span>
          </span>
        </div>
      </div>
      <div className={`${RowKind === 1 ? "centering flex-col" : "flex-center-start lg:flex-between-start flex-wrap"} gap-5`}>{data.map((item, index) => (RowKind === 1 ? <CoursesRowElements key={index} item={item} /> : <CoursesGridElements key={index} item={item} />))}</div>
    </div>
  );
};

export default CoursesContainer;
