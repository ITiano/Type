import { useState } from "react";
import RowVerticalIcon from "public/icons/GridIcon";
import RowHorizontalIcon from "public/icons/RowIcon";
import CoursesRowElements from "./_components/CoursesRowElements";

const CoursesContainer = ({ data }) => {
  const [rowKind, setRowKind] = useState(1);

  return (
    <div className="w-full mx-auto px-3">
      <div className="flex-col sm:flex-row flex-between-center mb-5 gap-3">
        <p className="font-bold text-lg w-full sm:w-auto">Starting with the subject</p>
        <div className="flex-end-center gap-3 w-full sm:w-auto">
          <p className="text-gray-3">View</p>
          <div className="flex-end-center gap-2 bg-gray-3 bg-opacity-20 px-1.5 py-1 rounded-full">
            <span
              onClick={() => setRowKind(1)}
              className={`p-2 rounded-full transition ${rowKind === 1 ? " bg-mainBlue" : "cursor-pointer"}`}
            >
              <RowVerticalIcon className={`${rowKind === 1 ? "text-white" : ""}`} />
            </span>
            <span
              onClick={() => setRowKind(2)}
              className={`p-2 rounded-full transition ${rowKind === 2 ? " bg-mainBlue" : "cursor-pointer"}`}
            >
              <RowHorizontalIcon className={`${rowKind === 2 ? "text-white" : ""}`} />
            </span>
          </div>
        </div>
      </div>
      <div
        className={`${
          rowKind === 1 ? "centering flex-col gap-5" : "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3"
        } `}
      >
        {data.map((item) => (
          <CoursesRowElements key={item.id} data={item} kind={rowKind} />
        ))}
      </div>
    </div>
  );
};

export default CoursesContainer;
