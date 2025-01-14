import React from "react";
import CourseDetail from "./CourseDetail";
import CourseHistory from "./CourseHistory";
import ModalContainer from "src/common/ModalContainer";

const CourseHistoryModal = ({ open, setOpen }) => {
  return (
    <ModalContainer open={open} setOpen={setOpen} clear title="Course histories">
      {open && (
        <>
          <div className="flex-start-center [&>*]:flex-row mb-4">
            <CourseDetail course={open} kind={2} />
          </div>
          <div className="flex flex-col gap-4 md:[&>*]:flex-row [&>*]:shadow [&>*]:rounded [&>*]:p-4">
            {open.histories.map((history, index) => (
              <CourseHistory key={history.id} course={open} history={history} kind={2} />
            ))}
          </div>
        </>
      )}
    </ModalContainer>
  );
};

export default CourseHistoryModal;
