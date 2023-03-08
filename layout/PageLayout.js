import React from "react";

const PageLayout = ({ TagName = "main", className, children }) => {
  return <TagName className={`max-w-[1400px] w-full mx-auto ${className}`}>{children}</TagName>;
};

export default PageLayout;
