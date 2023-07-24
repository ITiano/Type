import Skeleton from "@components/common/Skeleton";
import KindSwitcherSection from "@components/pages/courses/KindSwitcherSection";
import React from "react";

const CoursesLoading = () => {
  return (
    <div className="m-layout p-layout">
      <KindSwitcherSection kind={1} />
      <div className="centering flex-col gap-5">
        <Skeleton height={86} />
        <Skeleton height={86} />
        <Skeleton height={86} />
        <Skeleton height={86} />
        <Skeleton height={86} />
        <Skeleton height={86} />
        <Skeleton height={86} />
        <Skeleton height={86} />
        <Skeleton height={86} />
        <Skeleton height={86} />
      </div>
    </div>
    
  );
};

export default CoursesLoading;
