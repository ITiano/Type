import React, { useState } from "react";

// Data
import DATA from "db";

// Components
import PageLayout from "components/layout/PageLayout";
import CoursesSection from "components/courses/CoursesSection";
import HistoryModal from "../../components/courses/HistoryModal";
import KindSwitcherSection from "components/courses/KindSwitcherSection";

const CursesPage = ({ courses }) => {
  const [kind, setKind] = useState(1);
  const [open, setOpen] = useState(false);
  const props = { kind, setKind, open, setOpen, courses };

  return (
    <PageLayout disableFooter>
      <KindSwitcherSection {...props} />
      <CoursesSection {...props} />
      <HistoryModal {...props} />
    </PageLayout>
  );
};

export default CursesPage;

export const getServerSideProps = async () => {
  return {
    props: {
      courses: DATA,
    },
  };
};
