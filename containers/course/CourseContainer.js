import { useEffect, useState } from "react";
import Type from "components/common/Type";
import CourseRating from "./_components/CourseRating";
import CourseReview from "./_components/CourseReview";
import CustomBtn from "components/utils/CustomBtn";
import { useRouter } from "next/router";

const STRING_TEST = `text this is a test this is a test of typing is a test of typing  test is a test typing tis is a rest of typing test is a test of typing`;

const CourseContainer = ({ data }) => {
  const [step, setStep] = useState(1);

  const { push, query } = useRouter();

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
    <div className="min-h-screen flex flex-col justify-between items-center p-layout">
      <div className="bg-gray-3 bg-opacity-30 h-3 w-10/12 mt-14 rounded-full"></div>
      <div className="mx-auto max-w-5xl">
        {step === 1 && <CourseReview data={data} setStep={setStep} />}
        {step === 2 && <Type data={STRING_TEST} setStep={setStep} />}
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
