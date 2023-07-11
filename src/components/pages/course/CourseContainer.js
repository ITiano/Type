"use client";
import { useCallback, useState } from "react";
import Type from "@components/pages/course/Type";
import CourseRating from "./CourseRating";
import CourseReview from "./CourseReview";
import CustomBtn from "@components/utils/CustomBtn";
import { useRouter } from "next/navigation";
import React from "react";
import routes from "@routes/routes";

const initialState = { score: 5, speed: 0, accuracy: 100 };

const CourseContainer = ({ data }) => {
  const [value, setValue] = useState(initialState);
  const { push, refresh } = useRouter();
  const [step, setStep] = useState(1);
  const [time, setTime] = useState(0);

  const refreshPage = useCallback(() => {
    refresh(routes.courseId.path(data.id));
    setValue(initialState);
    setStep(1);
  }, [data.id, refresh]);

  const nextBtnOption = {
    1: { text: "Get Started", onClick: () => setStep(2), hidden: false },
    2: { text: "Next", onClick: () => setStep(3), hidden: true },
    3: { text: "Next lesson", onClick: () => push(routes.courseId.path(data.next.id)), hidden: !data.next },
  };

  const backBtnOption = {
    1: { text: "previous lesson", onClick: () => push(routes.courseId.path(data.prev.id)), hidden: !data.prev },
    2: { text: "back", onClick: () => setStep(1), hidden: false },
    3: { text: "Again", onClick: refreshPage, hidden: false },
  };

  return (
    <div className="flex flex-col justify-between items-center p-layout min-h-screen">
      {step === 1 && (
        <div className="flex-1 centering">
          <CourseReview data={data} setStep={setStep} />
        </div>
      )}
      {step === 2 && (
        <Type data={data?.course} setStep={setStep} setValue={setValue} value={value} time={time} setTime={setTime} />
      )}
      {step === 3 && <CourseRating data={data} setStep={setStep} value={value} time={time} />}
      <div className="py-10 px-16 w-full flex-between-center z-50 relative">
        <div>
          {!backBtnOption[step].hidden && (
            <CustomBtn text={backBtnOption[step].text} onClick={backBtnOption[step].onClick} arrowStartBtn />
          )}
        </div>

        <div>
          {!nextBtnOption[step].hidden && (
            <CustomBtn text={nextBtnOption[step].text} onClick={nextBtnOption[step].onClick} arrowEndBtn />
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseContainer;
