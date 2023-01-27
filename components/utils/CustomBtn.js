import ArrowRight from "public/icons/ArrowRight";

const CustomBtn = ({ text, startIcon, endIcon, onClick, className, disabled, loading, type = "button", arrowBtn }) => {
  return (
    <button className={`btn centering gap-2 ${className} ${disabled && "opacity-10"}`} disabled={loading || disabled} onClick={onClick} type={type}>
      {startIcon}
      {text}
      {arrowBtn && <ArrowRight />}
      {endIcon}
    </button>
  );
};

export default CustomBtn;
