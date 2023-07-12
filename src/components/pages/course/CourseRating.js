import Stars from "@components/common/Stars";
import Confetti from "@components/common/Confetti";
import CoursesImages from "@components/common/CoursesImages";

const CourseRating = ({ data: { kind, name }, value, time }) => {
  return (
    <>
      <div className="centering flex-col gap-2 max-w-xs mx-auto flex-1">
        <CoursesImages kind={kind} size={140} />
        <p className=" font-semibold pb-1.5 mt-1 text-2xl">{name}</p>
        <Stars value={value.score} />
        <div className="flex-between-center flex-col gap-8 mt-5 3xs:divide-x 3xs:gap-0 3xs:flex-row">
          <CourseRatingElement name="Score" value={value.score} />
          <CourseRatingElement name="Accuracy" value={value.accuracy} />
          <CourseRatingElement name="Speed" value={value.speed} />
          <CourseRatingElement name="Time" value={time} />
        </div>
      </div>
      <Confetti />
    </>
  );
};

export default CourseRating;

const CourseRatingElement = ({ name, value }) => {
  return (
    <div className="text-center min-w-[120px]">
      <p>{name}</p>
      <p className="font-semibold mt-2">{value}</p>
    </div>
  );
};
