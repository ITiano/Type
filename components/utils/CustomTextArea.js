const CustomTextArea = ({ name, label, className, formik, placeholder, rest }) => {
  const { values, handleChange, touched, errors } = formik;
  return (
    <>
      <label className="px-1 block mb-1">{label}</label>
      <textarea
        rows={4}
        autoComplete="off"
        className={`w-full px-3 py-1 bg-white text-sm border-2 rounded-md ${
          touched[name] && errors[name] ? "border-pink-500 focus:border-pink-500" : "border-gray-2 focus:border-mainBlue"
        } ${className} `}
        name={name}
        value={values[name]}
        onChange={handleChange}
        placeholder={placeholder}
        {...rest}
      />
      <p className="text-xs pl-1 text-pink-600 h-4 mb-1">{touched[name] && errors[name]}</p>
    </>
  );
};

export default CustomTextArea;
