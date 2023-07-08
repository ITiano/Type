
import { ArrowLeftIcon, ArrowRightIcon } from "@assets/icons/icons";
import Spinner from "./Spinner";

const CustomBtn = ({ text, endIcon, onClick, loading, disabled, className, startIcon, arrowEndBtn, arrowStartBtn, type = "button" }) => {
  return (
    <button type={type} onClick={onClick} disabled={loading || disabled} className={`btn centering gap-2 ${className} ${disabled && "opacity-70"}`}>
      {startIcon}
      {arrowStartBtn && <ArrowLeftIcon />}
      {loading && <Spinner />}
      {text}
      {arrowEndBtn && <ArrowRightIcon />}
      {endIcon}
    </button>
  );
};

export default CustomBtn;
