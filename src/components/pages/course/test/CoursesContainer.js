"use client";
import React, { Suspense, useState } from "react";
import KindSwitcherSection from "@components/pages/courses/KindSwitcherSection";
import CoursesSection from "@components/pages/courses/CoursesSection";
import CourseHistoryModal from "@components/pages/courses/CourseHistoryModal";

const CoursesContainer = ({ data }) => {
  const [kind, setKind] = useState(1);
  const [open, setOpen] = useState(false);

  const props = { kind, setKind, open, setOpen, data };

  return (
    <div className="m-layout">
      <KindSwitcherSection {...props} />
      <CoursesSection {...props} />
      <CourseHistoryModal {...props} />
    </div>
  );
};

export default CoursesContainer;
