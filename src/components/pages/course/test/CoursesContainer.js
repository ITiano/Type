"use client";

import DATA from "db";
import React, { useState } from "react";
import KindSwitcherSection from "@components/pages/courses/KindSwitcherSection";
import CoursesSection from "@components/pages/courses/CoursesSection";
import CourseHistoryModal from "@components/pages/courses/CourseHistoryModal";

const CoursesContainer = ({ data }) => {
  console.log(data);



  const [kind, setKind] = useState(1);
  const [open, setOpen] = useState(false);

  const props = { kind, setKind, open, setOpen, courses: DATA };

  return (
    <div className="mt-24">
      <KindSwitcherSection {...props} />
      <CoursesSection {...props} />
      <CourseHistoryModal {...props} />
    </div>
  );
};

export default CoursesContainer;
