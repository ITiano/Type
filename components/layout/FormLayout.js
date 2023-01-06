import CustomBtn from "components/utils/CustomBtn";
import CustomCheckbox from "components/utils/CustomCheckbox";
import CustomInput from "components/utils/CustomInput";
import GoogleIcon from "public/icons/GoogleIcon";
import TwitterIcon from "public/icons/TwitterIcon";

const FormLayout = ({ title, description, formik, options, buttonText, loading, children }) => {
  const HtmlRendering = (item) => {
    switch (item.formType) {
      case "input":
        return <CustomInput formik={formik} {...item} />;
      case "checkbox":
        return <CustomCheckbox formik={formik} {...item} />;
      default:
        return <></>;
    }
  };

  return (
    <div className="frame-letter">
      <form onSubmit={formik.handleSubmit} className="form">
        <h2 className="text-3xl font-bold">{title}</h2>
        <p className="text-xs opacity-40 mt-1 mb-6 font-medium">{description}</p>

        {options.map((item) => {
          if (item.children)
            return (
              <div className={`flex-start-center gap-3 ${item.className || ""}`}>
                {item.children.map((child, index) => {
                  return <div key={index}>{HtmlRendering(child)}</div>;
                })}
              </div>
            );
          else return <div>{HtmlRendering(item)}</div>;
        })}

        <CustomBtn type="submit" text={buttonText} className="black-btn w-full mt-6" loading={loading} />
        
        {children}
        <div className="w-full centering gap-2 mt-8">
          <span className="h-px bg-mainGray flex-1"></span>
          <span>Or continue with</span>
          <span className="h-px bg-mainGray flex-1"></span>
        </div>
        <div className="mt-8 centering gap-3">
          <span className="w-12 h-12 centering rounded-full bg-gray-100">
            <GoogleIcon />
          </span>
          <span className="w-12 h-12 centering rounded-full bg-gray-100">
            <TwitterIcon />
          </span>
        </div>
      </form>
    </div>
  );
};

export default FormLayout;
