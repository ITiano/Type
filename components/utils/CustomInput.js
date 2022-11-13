const CustomInput = ({ label, formik, name, helper = false, startIcon, className, ...rest }) => {
  return (
    <div className="relative">
      {/* <p className="text-sm mb-1 text-white pl-4">{label}</p> */}
      <input
        className={`w-full px-10 py-2 bg-transparent border-2 rounded-xl border-white text-white text-center ${className}`}
        name={name}
        value={formik.values[name]}
        // error={formik.touched[name] && Boolean(formik.errors[name])}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        {...rest}
      />
      <span className="absolute top-2 left-2">{startIcon}</span>

      <p className="text-xs pl-4 text-red-400 h-4">{formik.touched[name] && formik.errors[name]}</p>
    </div>
  );
};

export default CustomInput;
