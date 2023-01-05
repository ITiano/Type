const CustomBtn = ({ text, startIcon, endIcon, OnClick, className, disabled, load, type = "button" }) => {
  return (
    <button
      className={`btn centering gap-2 ${className} ${disabled && "opacity-10"}`}
      disabled={load ? true : disabled}
      onClick={OnClick}
      type={type}
    >
      {startIcon}
      {text}
      {endIcon}
    </button>
  );
};

export default CustomBtn;
