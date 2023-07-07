const CustomCheckbox = ({ label, formik, name, className }) => {
  const { values, handleChange, touched, errors } = formik;

  return (
    <div>
      <div className="flex-start-center gap-1 px-1">
        <input
          id={name}
          type="checkbox"
          checked={values[name]}
          onChange={handleChange}
          className={`text-mainBlue rounded cursor-pointer p-1.5 selection:red ${className}`}
        />
        <label htmlFor={name} className="text-xs opacity-70 cursor-pointer">
          {label}
        </label>
      </div>
      <p className="text-xs pl-1 text-pink-600 h-4 mb-1">{touched[name] && errors[name]}</p>
    </div>
  );
};

export default CustomCheckbox;
