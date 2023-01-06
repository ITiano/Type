const CustomBtn = ({ text, startIcon, endIcon, onClick, className, disabled, loading, type = "button" }) => {
  return (
    <button
      className={`btn centering gap-2 ${className} ${disabled && "opacity-10"}`}
      disabled={loading || disabled}
      onClick={onClick}
      type={type}
    >
      {startIcon}
      {text}
      {endIcon}
    </button>
  );
};

export default CustomBtn;
