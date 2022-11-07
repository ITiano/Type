const CustomInput = ({ label, formik, name, helper = false, ...rest }) => {
  return (
    <div>
      <p className="text-sm mb-1 text-white pl-4">{label}</p>
      <input
        className="w-full px-4 py-1 bg-transparent border-2 rounded-3xl border-white text-white"
        name={name}
        value={formik.values[name]}
        // error={formik.touched[name] && Boolean(formik.errors[name])}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        {...rest}
      />

      <p className="text-xs pl-4 text-red-400 h-4">{formik.touched[name] && formik.errors[name]}</p>
    </div>
  );
};

export default CustomInput;
