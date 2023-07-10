"use client";
import { useState } from "react";
import Type from "@components/pages/course/Type";
import CourseRating from "./CourseRating";
import CourseReview from "./CourseReview";
import CustomBtn from "@components/utils/CustomBtn";
import { useRouter } from "next/navigation";
import React from "react";

const initialState = { score: 5, speed: 0, accuracy: 100, duration: 0 };

const CourseContainer = ({ data }) => {
  const [value, setValue] = useState(initialState);

  const [step, setStep] = useState(1);
  const { push, query } = useRouter();

  const nextBtnOption = {
    1: { text: "Get Started", onClick: () => setStep(2), hidden: false },
    2: { text: "Next", onClick: () => setStep(3), hidden: true },
    3: { text: "Next lesson", onClick: () => push(`/courses/${+query.courseId + 1}`), hidden: false },
  };

  const backBtnOption = {
    1: { text: "previous lesson", onClick: () => push("/courses"), hidden: false },
    2: { text: "back", onClick: () => setStep(1), hidden: false },
    3: { text: "Again", onClick: () => push(`/courses/${query.courseId}`), hidden: false },
  };

  console.log(value.speed);

  return (
    <div className="flex flex-col justify-between items-center p-layout min-h-[100svh]">
      <div className="flex-1 centering w-full">
        {step === 1 && <CourseReview data={data} setStep={setStep} />}
        {step === 2 && (
          <div>
            <Type data={data?.course} setStep={setStep} setValue={setValue} value={value} />
          </div>
        )}
        {step === 3 && <CourseRating data={data} setStep={setStep} />}
      </div>
      <div className="bg-white py-10 px-16 w-full flex-between-center">
        {!backBtnOption[step].hidden && (
          <CustomBtn text={backBtnOption[step].text} onClick={backBtnOption[step].onClick} arrowStartBtn />
        )}
        {!nextBtnOption[step].hidden && (
          <CustomBtn text={nextBtnOption[step].text} onClick={nextBtnOption[step].onClick} arrowEndBtn />
        )}
      </div>
    </div>
  );
};

export default CourseContainer;
