import React from "react";
import { GridIcon, RowIcon } from "@assets/icons/icons";

const KindSwitcherSection = ({ kind, setKind }) => {
  return (
    <section className="flex-col sm:flex-row flex-between-center mb-5 gap-3">
      <p className="font-bold text-lg w-full sm:w-auto">Starting with the subject</p>
      <div className="flex-end-center gap-3 w-full sm:w-auto">
        <p className="text-gray-3">View</p>
        <div className="flex-end-center gap-2 bg-gray-3 bg-opacity-20 px-1.5 py-1 rounded-full">
          <span
            onClick={() => setKind(1)}
            className={`p-2 rounded-full transition ${kind === 1 ? " bg-mainBlue" : "cursor-pointer"}`}
          >
            <GridIcon className={`${kind === 1 ? "text-white" : ""}`} />
          </span>
          <span
            onClick={() => setKind(2)}
            className={`p-2 rounded-full transition ${kind === 2 ? " bg-mainBlue" : "cursor-pointer"}`}
          >
            <RowIcon className={`${kind === 2 ? "text-white" : ""}`} />
          </span>
        </div>
      </div>
    </section>
  );
};

export default KindSwitcherSection;
