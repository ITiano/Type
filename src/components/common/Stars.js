import React from "react";
import { StarIcon } from "@assets/icons/icons";

const Stars = ({ value }) => (
  <div className="flex-start-center">
    {[1, 2, 3, 4, 5].map((s) => (
      <StarIcon key={s} className={s > value && "!text-gray-3"} />
    ))}
  </div>
);

export default Stars;
