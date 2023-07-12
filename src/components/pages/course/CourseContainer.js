"use client";

import { useCallback, useEffect, useState } from "react";
import Type from "@components/pages/course/Type";
import CourseRating from "./CourseRating";
import CourseReview from "./CourseReview";
import CustomBtn from "@components/utils/CustomBtn";
import { useRouter } from "next/navigation";
import routes from "@routes/routes";
import { addHistory } from "@services/courseApi";
import { useAuth } from "src/context/AuthContextProvider";

const initialState = { score: 5, speed: 0, accuracy: 100 };

const CourseContainer = ({ data }) => {
  const [user] = useAuth();
  const [step, setStep] = useState(1);
  const [time, setTime] = useState(0);
  const { push, refresh } = useRouter();
  const [disabled, setDisabled] = useState(false);
  const [value, setValue] = useState(initialState);

  const refreshPage = useCallback(() => {
    refresh(routes.courseId.path(data.id));
    setValue(initialState);
    setStep(1);
  }, [data.id, refresh]);

  useEffect(() => {
    const addNewHistory = async () => {
      setDisabled(true);
      const { error } = await addHistory({ ...value, duration: time, course_id: data.id, user_id: user.id });
      !error && setDisabled(false);
    };
    step === 3 && addNewHistory();
  }, [data, step, time, user.id, value]);

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
    <div className="flex-between-center flex-col p-layout min-h-screen max-w-layout px-4">
      {step === 1 && (
        <div className="flex-1 centering">
          <CourseReview data={data} setStep={setStep} />
        </div>
      )}
      {step === 2 && (
        <Type data={data?.course} setStep={setStep} setValue={setValue} value={value} time={time} setTime={setTime} />
      )}
      {step === 3 && <CourseRating data={data} setStep={setStep} value={value} time={time} />}
      <div className="py-10 w-full flex-between-center z-20 relative">
        <div>
          {!backBtnOption[step].hidden && (
            <CustomBtn text={backBtnOption[step].text} onClick={backBtnOption[step].onClick} arrowStartBtn disabled={disabled} />
          )}
        </div>

        <div>
          {!nextBtnOption[step].hidden && (
            <CustomBtn text={nextBtnOption[step].text} onClick={nextBtnOption[step].onClick} arrowEndBtn disabled={disabled} />
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseContainer;
