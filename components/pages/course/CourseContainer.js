import { useEffect, useState } from "react";
import Type from "components/pages/course/Type";
import CourseRating from "./CourseRating";
import CourseReview from "./CourseReview";
import CustomBtn from "components/utils/CustomBtn";
import { useRouter } from "next/router";
import useViewport from "hooks/useViewport";

// const STRING_TEST = "In publishing and graphic design. In publishing and graphic design. In publishing and graphic.";

const CourseContainer = ({ data }) => {
  const [step, setStep] = useState(1);
  const { push, query } = useRouter();
  const { height: minHeight } = useViewport("px");

  useEffect(() => {
    data && setStep(1);
  }, [data]);

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

  return (
    <div style={{ minHeight }} className="flex flex-col justify-between items-center p-layout">
      {step === 1 && <CourseReview data={data} setStep={setStep} />}
      {step === 2 && <Type data={data?.course} setStep={setStep} />}
      {step === 3 && <CourseRating data={data} setStep={setStep} />}
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
