import { useState } from "react";
import Type from "components/common/Type";
import CourseRating from "./_components/CourseRating";
import CourseReview from "./_components/CourseReview";

// const STRING_TEST = "In publishing and graphic design. In publishing and graphic design. In publishing and graphic.";

const CourseContainer = ({ data }) => {
  const [Step, setStep] = useState(1);
  return (
    <div className="min-h-screen flex flex-col justify-between items-center [&>*]:w-full">
      {Step === 1 && <CourseReview setStep={setStep} />}
      {Step === 2 && <Type data={data?.course} setStep={setStep} />}
      {Step === 3 && <CourseRating setStep={setStep} />}
    </div>
  );
};

export default CourseContainer;
