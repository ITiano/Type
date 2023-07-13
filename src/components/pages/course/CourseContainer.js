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

const initialState = { score: 0, speed: 0, accuracy: 0, duration: 0 };

const CourseContainer = ({ data }) => {
  const [user] = useAuth();
  const [step, setStep] = useState(1);
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
      const { error } = await addHistory({ ...value, course_id: data.id, user_id: user.id });
      !error && setDisabled(false);
    };
    step === 3 && addNewHistory();
  }, [data, step, user.id, value]);

  const nextBtn = {
    1: { text: "Get Started", onClick: () => setStep(2), hidden: false },
    2: { text: "Next", onClick: () => setStep(3), hidden: true },
    3: { text: "Next lesson", onClick: () => push(routes.courseId.path(data.next.id)), hidden: !data.next },
  };

  const backBtn = {
    1: { text: "previous lesson", onClick: () => push(routes.courseId.path(data.prev.id)), hidden: !data.prev },
    2: { text: "back", onClick: () => setStep(1), hidden: false },
    3: { text: "Again", onClick: refreshPage, hidden: false },
  };

  return (
    <div className="flex-between-center flex-col p-layout min-h-screen max-w-layout px-4">
      {step === 1 && <CourseReview data={data} setStep={setStep} />}
      {step === 2 && <Type data={data?.course} setStep={setStep} value={value} setValue={setValue} />}
      {step === 3 && <CourseRating data={data} setStep={setStep} value={value} />}
      <div className="py-10 w-full flex-between-center z-20 relative">
        <div>
          {!backBtn[step].hidden && (
            <CustomBtn text={backBtn[step].text} onClick={backBtn[step].onClick} arrowStartBtn disabled={disabled} />
          )}
        </div>

        <div>
          {!nextBtn[step].hidden && (
            <CustomBtn text={nextBtn[step].text} onClick={nextBtn[step].onClick} arrowEndBtn disabled={disabled} />
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseContainer;
