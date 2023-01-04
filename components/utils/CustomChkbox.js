const CustomChkbox = ({ label }) => {
  return (
    <div className="flex-start-center gap-1">
      <input type={"checkbox"} />
      <p className="text-xs opacity-70">{label}</p>
    </div>
  );
};

export default CustomChkbox;
