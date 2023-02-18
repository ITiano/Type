import Type from "components/common/Type";
import { useState } from "react";
import CourseReview from "./_components/CourseReview";

const CourseContainer = ({data}) => {
  const [Step, setStep] = useState(1);
  return (
    <div className="min-h-screen flex flex-col justify-between items-center">
      {Step === 1 && <CourseReview setStep={setStep} />}
      {Step === 2 && <Type data={data?.course} />}
      {Step === 3 && <CourseReview />}
    </div>
  );
};

export default CourseContainer;
