const CustomCheckbox = ({ label }) => {
  return (
    <div className="flex-start-center gap-1">
      <input className="accent-mainBlue" type="checkbox" />
      <p className="text-xs opacity-70">{label}</p>
    </div>
  );
};

export default CustomCheckbox;
