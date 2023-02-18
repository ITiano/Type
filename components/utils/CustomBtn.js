import ArrowLeftIcon from "public/icons/ArrowLeftIcon";
import ArrowRightIcon from "public/icons/ArrowRightIcon";

const CustomBtn = ({ text, startIcon, endIcon, onClick, className, disabled, loading, type = "button", arrowEndBtn, arrowStartBtn }) => {
  return (
    <button className={`btn centering gap-2 ${className} ${disabled && "opacity-10"}`} disabled={loading || disabled} onClick={onClick} type={type}>
      {startIcon}
      {arrowStartBtn && <ArrowLeftIcon />}
      {text}
      {arrowEndBtn && <ArrowRightIcon />}
      {endIcon}
    </button>
  );
};

export default CustomBtn;
