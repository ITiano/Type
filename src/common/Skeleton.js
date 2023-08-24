import React from "react";

const Skeleton = ({ height, className = "" }) => (
  <div
    style={{ height: height ? height + "px" : undefined }}
    className={`w-full rounded-xl skeleton animate-skeleton ${className}`}
  ></div>
);

export default Skeleton;
