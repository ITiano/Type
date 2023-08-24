import Skeleton from "src/common/Skeleton";
import KindSwitcherSection from "src/app/(user)/courses/components/KindSwitcherSection";
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
