import Stars from "src/common/Stars";
import Confetti from "src/common/Confetti";
import CoursesImages from "src/common/CoursesImages";
import CourseShowDetails from "./CourseShowDetails";

const CourseRating = ({ data: { kind, name }, value }) => {
  return (
    <>
      <div className="centering flex-col gap-2 flex-1">
        <CoursesImages kind={kind} size={140} />
        <p className=" font-semibold pb-1.5 mt-1 text-2xl">{name}</p>
        <Stars value={value.score} />
        <CourseShowDetails
          disableStatus
          className="flex-between-center flex-col gap-8 mt-5 3xs:divide-x 3xs:gap-0 3xs:flex-row"
          value={value}
        />
      </div>
      <Confetti />
    </>
  );
};

export default CourseRating;
