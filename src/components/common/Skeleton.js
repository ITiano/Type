import React from "react";

const Skeleton = ({ height = 100, className = "" }) => (
  <div style={{ height: height + "px" }} className={`w-full rounded-xl skeleton animate-skeleton ${className}`}></div>
);

export default Skeleton;
