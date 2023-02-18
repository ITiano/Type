import StarIcon from "public/icons/StarIcon";

const Stars = ({value}) => (
  <div className="flex-start-center">
    {[1, 2, 3, 4, 5].map((s) => (
      <StarIcon className={s > value && "!text-gray-3"} />
    ))}
  </div>
);

export default Stars;
