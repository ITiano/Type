"use client";
import React, { useState } from "react";
import KindSwitcherSection from "src/app/(user)/courses/components/KindSwitcherSection";
import CoursesSection from "src/app/(user)/courses/components/CoursesSection";
import CourseHistoryModal from "src/app/(user)/courses/components/CourseHistoryModal";

const CoursesContainer = ({ data }) => {
  const [kind, setKind] = useState(1);
  const [open, setOpen] = useState(false);

  const props = { kind, setKind, open, setOpen, data };

  return (
    <div className="m-layout p-layout">
      <KindSwitcherSection {...props} />
      <CoursesSection {...props} />
      <CourseHistoryModal {...props} />
    </div>
  );
};

export default CoursesContainer;
