import Stars from "@components/common/Stars";
import Confetti from "@components/common/Confetti";
import CoursesImages from "@components/common/CoursesImages";
import CourseShowDetails from "./CourseShowDetails";

const CourseRating = ({ data: { kind, name }, value, duration }) => {
  return (
    <>
      <div className="centering flex-col gap-2 max-w-xs mx-auto flex-1">
        <CoursesImages kind={kind} size={140} />
        <p className=" font-semibold pb-1.5 mt-1 text-2xl">{name}</p>
        <Stars value={value.current.score} />
        <CourseShowDetails
          disableStatus
          className="flex-between-center flex-col gap-8 mt-5 3xs:divide-x 3xs:gap-0 3xs:flex-row"
          value={value}
          duration={duration}
        />
      </div>
      <Confetti />
    </>
  );
};

export default CourseRating;
