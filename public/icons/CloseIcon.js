import React from "react";

const CloseIcon = ({ className }) => {
  return (
    <svg
      width="18"
      height="18"
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth={1.5}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M6 6L18 18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6 18L18 6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

export default CloseIcon;
