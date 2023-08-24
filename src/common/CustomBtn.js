import { ArrowLeftIcon, ArrowRightIcon } from "@assets/icons/icons";
import Spinner from "./Spinner";

const CustomBtn = ({
  text,
  endIcon,
  onClick,
  loading,
  disabled,
  className,
  startIcon,
  arrowEndBtn,
  arrowStartBtn,
  type = "button",
  iconClassName = "",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={loading || disabled}
      className={`btn centering gap-2 ${className} ${disabled && "opacity-70"}`}
    >
      {startIcon}
      {arrowStartBtn && <ArrowLeftIcon className={iconClassName} />}
      {loading && <Spinner />}
      {text}
      {arrowEndBtn && <ArrowRightIcon className={iconClassName} />}
      {endIcon}
    </button>
  );
};

export default CustomBtn;
