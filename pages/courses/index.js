import React, { useState } from "react";

// Data
import DATA from "db";

// Components
import PageLayout from "components/layout/PageLayout";
import CoursesSection from "components/pages/courses/CoursesSection";
import KindSwitcherSection from "components/pages/courses/KindSwitcherSection";
import CourseHistoryModal from "../../components/pages/courses/CourseHistoryModal";

const CursesPage = ({ courses }) => {
  const [kind, setKind] = useState(1);
  const [open, setOpen] = useState(false);

  const props = { kind, setKind, open, setOpen, courses };

  return (
    <PageLayout disableFooter>
      <KindSwitcherSection {...props} />
      <CoursesSection {...props} />
      <CourseHistoryModal {...props} />
    </PageLayout>
  );
};

export default CursesPage;

export const getServerSideProps = async () => ({ props: { courses: DATA } });
