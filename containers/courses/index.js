import CoursesElements from "./_components/CoursesElements";

const CoursesContainer = () => {
  return (
    <div className="max-w-6xl m-auto my-8 px-5">
      <p className="font-bold text-lg mb-5">Starting with the subject</p>
      <div className="centering flex-col gap-5">
        <CoursesElements />
        <CoursesElements />
        <CoursesElements />
      </div>
    </div>
  );
};

export default CoursesContainer;
