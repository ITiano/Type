const CustomBtn = ({ text, icon, OnClick, className, disabled, load, textField, parentClassName, type = "submit" }) => {
  return (
    <div className={`flex-end-end ${parentClassName}`}>
      <button className={`custom-btn centering gap-2 ${className} ${disabled && "opacity-10"}`} disabled={load ? true : disabled} onClick={OnClick} type={type}>
        {icon}
        {text}
      </button>
    </div>
  );
};

export default CustomBtn;
