import React from "react";

const PageLayout = ({ TagName = "main", className, children }) => {
  return <TagName className={`max-w-6xl w-full mx-auto mt-[64px] mb-[35px] ${className}`}>{children}</TagName>;
};

export default PageLayout;
